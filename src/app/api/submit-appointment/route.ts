import * as Yup from 'yup'
import { TBookingParams, BookingSchema } from "@/schemas/validationSchemas";
import { sanitizeStrings } from '@/lib/utils';
import { NextResponse } from "next/server";
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// New Booking Email Body
const genHTMLBodyResponse = (data: TBookingParams): string => {
    const { date, name, note, phone, service, time } = sanitizeStrings(data)
    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
    })

    return `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #333;">📅 New Booking Request</h2>
            <p style="margin: 16px 0;">You’ve received a new booking request with the following details:</p>

            <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 8px; font-weight: bold;">Name:</td>
                <td style="padding: 8px;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 8px; font-weight: bold;">Phone:</td>
                <td style="padding: 8px;">${phone}</td>
            </tr>
            <tr>
                <td style="padding: 8px; font-weight: bold;">Service:</td>
                <td style="padding: 8px;">${service}</td>
            </tr>
            <tr>
                <td style="padding: 8px; font-weight: bold;">Date:</td>
                <td style="padding: 8px;">${formattedDate}</td>
            </tr>
            <tr>
                <td style="padding: 8px; font-weight: bold;">Time:</td>
                <td style="padding: 8px;">${time}</td>
            </tr>
            ${note ? `<tr>
                    <td style="padding: 8px; font-weight: bold;">Note:</td>
                    <td style="padding: 8px;">${note}</td>
                    </tr>`
                : ''
            }
            </table>

            <p style="margin-top: 24px; font-size: 14px; color: #888;">This message was sent via booking.</p>
        </div>
    `
}

export async function POST(req: Request) {
    const slot: TBookingParams = sanitizeStrings(await req.json())
    
    try {
        const validatedData = await BookingSchema.validate(slot, { abortEarly: false })

        resend.emails.send({
            from: process.env.RESEND_SENDER_EMAIL!,
            to: [process.env.RESEND_RECIEVER_EMAIL!],
            subject: `New Booking from ${validatedData.name}`,
            html: genHTMLBodyResponse(validatedData)
        })

        return NextResponse.json({
            success: true,
            bookedData: validatedData
        })
    }

    catch (error) {
        console.log(`An error occured sending an email: ${error}`)
        if (error instanceof Yup.ValidationError) {
            return NextResponse.json({
                success: false,
                errors: error.errors
            })
        } else {
            console.log(`An error occured sending an email: ${error}`)
            return NextResponse.json({ errors: `An error occured sending an email: ${error}` })
        }
    }
}