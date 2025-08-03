'use client'

import type { TSelectFormOptions } from '@/types/form.types'
import { useField } from 'formik'
import { useState } from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Icon, Ticons } from '@app-ui/Icon'

type TFormikSelectionProps = {
    fieldName: string
    placeholder?: string
    options: TSelectFormOptions[]
    icon?: Ticons
}

const FormikSelection = (
    { fieldName, placeholder = "Select an option", options, icon }
    : TFormikSelectionProps
) => {
    const [ field, meta, helpers ] = useField(fieldName)
    const [ isOpen, setOpen ] = useState(false)
    
    return (
        <div className="inline-flex w-max relative">
            <Select
                value={field.value}
                onValueChange={(val) => helpers.setValue(val)}
                open={isOpen}
                onOpenChange={(state) => setOpen(state)}
            >
                <SelectTrigger className={`w-full${icon ? " [&>svg]:last-of-type:hidden" : ""}`}>
                    <SelectValue placeholder={placeholder} />
                    { icon && <Icon icon={icon} className="opacity-50" /> }
                </SelectTrigger>
                <SelectContent className="bg-brown-dp-0">
                    { options.map(select => (
                        <SelectItem value={select.value} key={select.value}>
                            { select.label }
                        </SelectItem>
                    )) }
                </SelectContent>
            </Select>
            { meta.touched && meta.error && (
                <div className="absolute top-full capitalize text-text-accent text-xs">
                    { meta.error }
                </div>
            )}
        </div>
    )
}

export default FormikSelection