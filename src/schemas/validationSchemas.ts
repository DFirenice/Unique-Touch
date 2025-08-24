import * as Yup from 'yup'
import { InferType } from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// Common field patterns
const nameShape = Yup.string()
    .min(2, '* Name is too short!')
    .max(25, '* Name is too long!')
    .required('* Name is Required!')

const phoneShape = Yup.string()
    .matches(phoneRegExp, '* This number is not valid!')
    .max(12)
    .required('* Phone is required!')

// Booking Form Schema
export const BookingSchema = Yup.object().shape({
    name: nameShape,
    phone: phoneShape,
    service: Yup.string().required('* Pick your preferred service'),
    date: Yup.date().required('* Date is required!'),
    time: Yup.string().required('* Time is required! '),
    note: Yup.string()
        .max(250, "* Max message length is 250 chars")
        .default('')
})

export type TBookingParams = InferType<typeof BookingSchema>

// Contact Form Schema
export const ContactSchema = Yup.object().shape({
    name: nameShape,
    phone: phoneShape,
    subject: Yup.string()
        .min(5, "* Subject must be at least 5 chars long")
        .max(30, "* Subject is too long, max 30 chars")
        .required("* Subject is required!"),
    message: Yup.string()
        .min(20, "* Message should contain at least 20 chars")
        .max(300, "* Message is too long!")
        .required("* Please write something so we can help!")
})

export type TContactParams = InferType<typeof ContactSchema>