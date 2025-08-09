import { NextResponse } from "next/server";
import { TContactParams, ContactSchema } from "@/schemas/validationSchemas";
import { sanitizeStrings } from "@/lib/utils";
import { Resend } from "resend";
import * as Yup from 'yup'

const genHTMLBodyResponse = ({ name, phone, subject, message }: TContactParams): string => {
    return `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
        <h2 style="color: #333;">📨 New Message from ${name}</h2>
        <p style="margin: 16px 0;">You’ve received a new get-in-touch message through the contact form:</p>

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
            <td style="padding: 8px; font-weight: bold;">Subject:</td>
            <td style="padding: 8px;">${subject}</td>
            </tr>
            <tr>
            <td style="padding: 8px; font-weight: bold;">Message:</td>
            <td style="padding: 8px;">${message}</td>
            </tr>
        </table>

        <p style="margin-top: 24px; font-size: 14px; color: #888;">This message was sent via website's contact form.</p>
        </div>
    `
}

export async function POST(req: Request) {
    const message: TContactParams = sanitizeStrings(await req.json())
    const resend = new Resend(process.env.RESEND_API_KEY!)

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_SENDER_EMAIL || !process.env.RESEND_RECIEVER_EMAIL) {
        return NextResponse.json({
            success: false,
            errors: "Server misconfiguration: missing environment variables."
        })
    }

    try {
        const validatedMessage = await ContactSchema.validate(message, { abortEarly: false })

        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_SENDER_EMAIL!,
            to: process.env.RESEND_RECIEVER_EMAIL!,
            subject: `New Question from ${sanitizeStrings(message).name}`,
            html: genHTMLBodyResponse(validatedMessage)
        })

        if (error) {
            console.log(error)
            return NextResponse.json({
                success: false,
                errors: error
            })
        }

        return NextResponse.json({
            success: true,
            data
        })
    } catch (err) {
        if (err instanceof Yup.ValidationError) {
            // console.error("Validation Errors:", err.errors)
            // console.error("Inner Errors:", err.inner)
            return NextResponse.json({
                success: false,
                errors: err.errors
            })
        } else {
            console.error("Unexpected Error:", err)
            return NextResponse.json({
                success: false,
                errors: "An internal error occurred."
            })
        }
    }
}