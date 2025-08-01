import * as Yup from 'yup'
import { InferType } from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const BookingSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, '* Name is too short!')
        .max(30, '* Name is too long!')
        .required('* Name is Required!'),
    phone: Yup.string()
        .matches(phoneRegExp, '* This number is not valid!')
        .max(10)
        .required('* Phone is required!'),
    service: Yup.string().required('* Pick your preferred service'),
    date: Yup.date().required('* Date is required!'),
    time: Yup.string().required('* Time is required! '),
    note: Yup.string().max(250, "* Max message length is 250 chars.")
})

export type TBookingParams = InferType<typeof BookingSchema>