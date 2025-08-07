'use client'

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useCallback } from 'react'

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import FormikSelection from '@app-ui/formikSelection'
import { BookingSchema } from '@/schemas/validationSchemas'
import { Button } from '@app-ui/button'
import { Heading } from '@app-ui/heading'
import Image from 'next/image'
import DateAndTime from '@app-comps/DateAndTime'

import { useState } from 'react'
import type { TBookingParams } from '@/schemas/validationSchemas'
import { serviceOptions } from '@/data/bookingForm.data'
import { cn } from '@/lib/utils'

const fieldClass = "text-sm placeholder-accent-foreground/50 border bg-background/50 shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"

const BookingForm = () => {
    const [ date, setDate ] = useState<Date | undefined>(undefined)
    const { executeRecaptcha } = useGoogleReCaptcha()

    const handleSubmit = useCallback(
        async (values: TBookingParams, actions: FormikHelpers<TBookingParams>) => {
            // Captcha is not yet ready
            if (!executeRecaptcha) return

            const token = await executeRecaptcha('form_submit')

            const res = await fetch('/api/verify-captcha', {
                method: 'POST',
                body: JSON.stringify({ token }),
            })

            const data = await res.json()
            
            if (data.success && data.score > 0.7) {
                const res = await fetch('/api/submit-appointment', {
                    method: "POST",
                    body: JSON.stringify(values)
                })

                const data = await res.json()
                console.log(data)
                
                actions.resetForm()
            } else alert('Captcha validation failed. Please, try later.')
        }, [ executeRecaptcha ]
    )

    return (
        <section className="m-section text-layer-dark px-4">
            <div className="container bg-brown-dp-1 flex items-center gap-4 flex-col md:flex-row w-full m-auto rounded-xl overflow-hidden min-h-[50vh] h-full">
                <div className="relative w-full min-h-[30vh] md:w-2/5 md:h-full md:min-h-[80vh]">
                    <Image src="/images/about/towels_on_rack.jpg" alt="Book now" fill className="object-cover" />
                </div>
                <div className="px-6 py-6 pb-12 md:py-12 w-full mx-auto max-w-xl">
                    <div className="max-md:*:mx-auto max-md:text-center">
                        <Heading size="2xl">Feel beautiful, Inside & Out</Heading>
                        <p className="mt-6">Ready to start your Beauva journey? Book your personalized session or reach out to us with any questions.</p>
                    </div>
                    <Formik
                        initialValues={{ name: '', phone: '', service: '', date: '' as unknown as Date, time: '', note: '' }}
                        onSubmit={handleSubmit}
                        validateOnBlur={true}
                        validationSchema={BookingSchema}
                    >
                        {({ isSubmitting }) => (
                            <Form autoComplete="off" className="flex flex-col mt-6 gap-5 *:relative *:*:w-full">
                                <div>
                                    <Field className={cn("px-3 py-2 rounded-lg", fieldClass)} name="name" type="text" placeholder="Your Name" />
                                    <ErrorMessage className="absolute capitalize text-text-accent text-xs" name="name" component="div" />
                                </div>
                                <div>
                                    <Field className={cn("px-3 py-2 rounded-lg", fieldClass)} name="phone" type="text" placeholder="Your Phone Number" />
                                    <ErrorMessage className="absolute capitalize text-text-accent text-xs" name="phone" component="div" />
                                </div>
                                <div className="w-full *:w-full">
                                    <FormikSelection fieldName='service' options={serviceOptions} placeholder="Preferred Service" />
                                    <ErrorMessage className="absolute capitalize text-text-accent text-xs" name="service" component="div" />

                                </div>
                                <div className="relative">
                                    <DateAndTime dateName="date" timeName="time" date={date} setDate={setDate} />
                                    <ErrorMessage className="absolute top-full capitalize text-text-accent text-xs" name="date" component="div" />
                                    <ErrorMessage className="left-[80%] absolute top-full capitalize text-text-accent text-xs" name="time" component="div" />
                                </div>
                                <div>
                                    <Field className={cn("px-3 py-2 rounded-lg", fieldClass)} name="note" type="text" placeholder="Your note (Optional)" />
                                    <ErrorMessage className="absolute capitalize text-text-accent text-xs" name="note" component="div" />
                                </div>
                                <Button className="inline-flex md:w-min mt-8 w-full" type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Booking...' : 'Book now'}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default BookingForm