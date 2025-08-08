"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { addDays, isSameDay } from "date-fns"
import { useFormikContext } from "formik"

const DateAndTime = (
    { date, setDate, dateName, timeName }:
        { date: Date | undefined, setDate: (date: Date) => void, dateName: string, timeName: string }
) => {
    const { setFieldValue, setFieldError } = useFormikContext()

    const [open, setOpen] = React.useState(false)
    const [time, setTime] = React.useState("12:00") // Changed to HH:mm
    const [error] = React.useState<string | null>(null)

    const currentDate = new Date()
    const maxDate = addDays(currentDate, 21)

    const validateTime = (timeStr: string) => {
        if (!date) return

        const [h, m] = timeStr.split(":").map(Number)
        const selectedTime = new Date(date)
        selectedTime.setHours(h)
        selectedTime.setMinutes(m)
        selectedTime.setSeconds(0)

        const opening = new Date(date)
        opening.setHours(10, 0, 0)

        const closing = new Date(date)
        closing.setHours(21, 30, 0)

        const now = new Date()
        const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000)

        if (selectedTime < opening || selectedTime > closing) {
            setFieldError("time", "* Time must be between 10:00 and 21:30.")
        } else if (isSameDay(date, now) && selectedTime < oneHourFromNow) {
            setFieldError("time", "* If selecting today, time must be at least 1 hour from now.")
        } else setFieldError("time", "")
    }

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setTime(value)
        validateTime(value)
        setFieldValue(timeName, value)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <div className="flex flex-col gap-3">
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                id="date-picker"
                                className="w-32 justify-between font-normal border-input"
                            >
                                {date ? date.toLocaleDateString() : "Select date"}
                                <ChevronDownIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto overflow-hidden p-0 bg-brown-dp-0/87" align="start">
                            <Calendar
                                numberOfMonths={1}
                                mode="single"
                                selected={date}
                                defaultMonth={currentDate}
                                startMonth={currentDate}
                                endMonth={maxDate}
                                disabled={[
                                    { before: currentDate },
                                    { after: maxDate },
                                ]}
                                captionLayout="label"
                                className="bg-brown-dp-0"
                                onSelect={(selected) => {
                                    setFieldValue(dateName, selected)
                                    setDate(selected as Date)
                                    setOpen(false)
                                    if (selected) validateTime(time)
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="flex flex-col gap-3 relative w-full">
                    <Input
                        type="time"
                        id="time-picker"
                        step="60" // Changed to 60 seconds (1 minute increments)
                        value={time}
                        min="10:00"
                        max="21:30"
                        onChange={handleTimeChange}
                        className="placeholder:text-accent-foreground appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                        placeholder="Ex.g.: 17:30"
                    />
                    {error && <p className="min-w-min w-full absolute top-full capitalize text-text-accent text-xs">{error}</p>}
                </div>
            </div>
        </div>
    )
}

export default DateAndTime