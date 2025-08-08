'use client'

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useCallback } from 'react'

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import { ContactSchema } from '@/schemas/validationSchemas'
import { Button } from '@app-ui/button'
import { Heading } from '@app-ui/heading'
import Image from 'next/image'
import { toast } from 'sonner'

import type { TContactParams } from '@/schemas/validationSchemas'
import { cn } from '@/lib/utils'
import { Icon } from '../ui/Icon'

const fieldClass = "lg:text-sm placeholder-accent-foreground/50 border border-input/25 bg-background/50 shadow-xs hover:bg-accent/65"

const ContactForm = () => {
    const { executeRecaptcha } = useGoogleReCaptcha()
    
    const handleSubmit = useCallback(
        async (values: TContactParams, actions: FormikHelpers<TContactParams>) => {
            // Captcha is not yet ready
            if (!executeRecaptcha) return

            const token = await executeRecaptcha('form_submit')

            const res = await fetch('/api/verify-captcha', {
                method: 'POST',
                body: JSON.stringify({ token }),
            })

            const data = await res.json()
            
            if (data.success && data.score > 0.7) {
                const res = await fetch('/api/submit-question', {
                    method: 'POST',
                    body: JSON.stringify(values)
                })

                const resData = await res.json()
                if (resData.success && resData.sentMessage) {
                    console.log(resData)
                    toast("Message Sent Successfully!", {
                        description: "We have recieved your message and will reply you shortly!",
                        icon: <Icon icon="BadgeCheck" size={28} />,
                        position: 'top-center',
                    })
                } else {
                    console.error(resData.errors)
                    toast("We couldn't deliver your message!", {
                        description: "An error occured while sending, please try again later.",
                        icon: <Icon icon="BadgeX" size={28} />,
                        position: 'top-center',
                    })
                }
                
                actions.resetForm()
            } else alert('Captcha validation failed. Please try again later.')
        }, [ executeRecaptcha ]
    )
    
    return (
        <section className="my-12 text-layer-light px-4">
            <div className="container bg-surface-light flex items-center gap-y-4 flex-col md:flex-row w-full m-auto rounded-xl overflow-hidden min-h-[50vh] h-full">
                <div className="relative w-full min-h-[30vh] md:w-2/5 md:h-full md:min-h-[75vh]">
                    <Image src="/images/about/spa-massage-oils-flowers-tray.jpg" alt="Book now" fill className="object-cover" />
                </div>
                <div className="px-6 py-6 pb-12 md:py-12 mx-auto">
                    <div className="max-md:*:mx-auto max-md:text-center">
                        <Heading size="2xl">Get In Touch</Heading>
                        <p className="mt-6">{`Have a question or need help choosing the right treatment? Send us a message and we'll get back to you shortly.`}</p>
                    </div>
                    <Formik
                        initialValues={{ name: '', phone: '', subject: '', message: '' }}
                        onSubmit={handleSubmit}
                        validateOnBlur={true}
                        validationSchema={ContactSchema}
                    >
                        {({ isSubmitting }) => (
                            <Form autoComplete="off" className="flex flex-col mt-6 gap-5 *:relative *:*:w-full **:placeholder-brown-dp-1/60">
                                <div>
                                    <Field className={cn("px-3 py-2 rounded-lg", fieldClass)} name="name" type="text" placeholder="Full Name" />
                                    <ErrorMessage className="absolute capitalize text-shadow-brown-dp-1 text-xs" name="name" component="div" />
                                </div>
                                <div>
                                    <Field className={cn("px-3 py-2 rounded-lg", fieldClass)} name="phone" type="text" placeholder="Phone Number" />
                                    <ErrorMessage className="absolute capitalize text-shadow-brown-dp-1 text-xs" name="phone" component="div" />
                                </div>
                                <div>
                                    <Field className={cn("px-3 py-2 rounded-lg", fieldClass)} name="subject" type="text" placeholder="Subject" />
                                    <ErrorMessage className="absolute capitalize text-shadow-brown-dp-1 text-xs" name="subject" component="div" />
                                </div>
                                <div>
                                    <Field className={cn("px-3 py-2 rounded-lg", fieldClass)} name="message" type="text" placeholder="Your Message" />
                                    <ErrorMessage className="absolute capitalize text-shadow-brown-dp-1 text-xs" name="message" component="div" />
                                </div>
                                <Button variant="secondary" className="inline-flex md:w-min mt-8 w-full" type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default ContactForm