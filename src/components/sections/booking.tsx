'use client'

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import FormikSelection from '@app-ui/formikSelection'
import { BookingSchema } from '@/schemas/validationSchemas'
import { Button } from '@app-ui/button'
import { Heading } from '@chakra-ui/react'
import Image from 'next/image'
import DateAndTime from '@app-comps/DateAndTime'

import { useState } from 'react'
import type { TBookingParams } from '@/schemas/validationSchemas'
import { serviceOptions } from '@/data/bookingForm.data'
import { cn } from '@/lib/utils'

const fieldClass = "text-sm placeholder-accent-foreground/50 border bg-background/50 shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"

const BookingForm = () => {
    const [date, setDate] = useState<Date | undefined>(undefined)

    const handleSubmit = async (values: TBookingParams, actions: FormikHelpers<TBookingParams>) => {
        await new Promise(resolve => { setTimeout(resolve, 1000) })
        console.log(values)
        actions.resetForm()
    }

    return (
        <section className="my-24 text-layer-dark px-4">
            <div className="container bg-brown-dp-1 flex items-center gap-4 flex-col md:flex-row xl:max-w-[65%] w-full m-auto rounded-xl overflow-hidden min-h-[50vh] h-full">
                <div className="relative w-full min-h-[30vh] md:w-2/5 md:h-full md:min-h-[75vh]">
                    <Image src="/images/about/towels_on_rack.jpg" alt="Book now" fill className="object-cover" />
                </div>
                <div className="px-6 py-6 pb-12 md:py-12">
                    <div className="*:mx-auto max-md:text-center">
                        <Heading size="2xl">Feel beautiful, Inside & Out</Heading>
                        <p className="mt-6">Ready to start your Beauva journey? Book your personalized session or reach out to us with any questions.</p>
                    </div>
                    <Formik initialValues={{ name: '', phone: '', service: '', date: '' as unknown as Date, time: '', note: '' }} onSubmit={handleSubmit} validateOnBlur={true} validationSchema={BookingSchema} >
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