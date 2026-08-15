'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, AlertCircle } from 'lucide-react'

const contactSchema = z.object({
 firstName: z.string().min(1, 'First name is required'),
 lastName: z.string().min(1, 'Last name is required'),
 email: z.string().email('Please enter a valid work email'),
 company: z.string().min(1, 'Company name is required'),
 inquiryType: z.string().min(1, 'Please select an inquiry type'),
 message: z.string().min(10, 'Please provide more details (minimum 10 characters)'),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactSalesForm() {
 const [isSuccess, setIsSuccess] = useState(false)
 const [serverError, setServerError] = useState<string | null>(null)

 const {
 register,
 handleSubmit,
 formState: { errors, isSubmitting },
 } = useForm<ContactFormValues>({
 resolver: zodResolver(contactSchema),
 })

 const onSubmit = async (data: ContactFormValues) => {
 setServerError(null)
 try {
 const response = await fetch('/api/contact-sales', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify(data),
 })
 if (!response.ok) {
 throw new Error('Something went wrong')
 }
 setIsSuccess(true)
 } catch (error) {
 setServerError('Failed to submit request. Please try again.')
 }
 }

 if (isSuccess) {
 return (
 <div className="rounded-lg border border-brand-100 bg-brand-50 p-8 text-center animate-in fade-in zoom-in duration-300">
 <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-brand-500" />
 <h3 className="mb-2 font-display text-body-xl font-semibold text-neutral-900">Message Sent</h3>
 <p className="text-body-md text-neutral-600">
 Our sales team has received your inquiry. We aim to respond within 24 business hours.
 </p>
 </div>
 )
 }

 return (
 <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-xl border border-base-border bg-white p-8 shadow-card">
 <div className="grid gap-6 sm:grid-cols-2">
 <div className="space-y-2">
 <label htmlFor="firstName" className="text-body-sm font-medium text-neutral-900">
 First Name <span className="text-error">*</span>
 </label>
 <Input id="firstName" error={!!errors.firstName} {...register('firstName')} />
 {errors.firstName && <p className="text-body-sm text-error">{errors.firstName.message}</p>}
 </div>
 
 <div className="space-y-2">
 <label htmlFor="lastName" className="text-body-sm font-medium text-neutral-900">
 Last Name <span className="text-error">*</span>
 </label>
 <Input id="lastName" error={!!errors.lastName} {...register('lastName')} />
 {errors.lastName && <p className="text-body-sm text-error">{errors.lastName.message}</p>}
 </div>
 </div>

 <div className="space-y-2">
 <label htmlFor="email" className="text-body-sm font-medium text-neutral-900">
 Work Email <span className="text-error">*</span>
 </label>
 <Input id="email" type="email" error={!!errors.email} {...register('email')} />
 {errors.email && <p className="text-body-sm text-error">{errors.email.message}</p>}
 </div>

 <div className="grid gap-6 sm:grid-cols-2">
 <div className="space-y-2">
 <label htmlFor="company" className="text-body-sm font-medium text-neutral-900">
 Company <span className="text-error">*</span>
 </label>
 <Input id="company" error={!!errors.company} {...register('company')} />
 {errors.company && <p className="text-body-sm text-error">{errors.company.message}</p>}
 </div>

 <div className="space-y-2">
 <label htmlFor="inquiryType" className="text-body-sm font-medium text-neutral-900">
 Topic <span className="text-error">*</span>
 </label>
 <select
 id="inquiryType"
 className={`flex h-11 w-full rounded-md border bg-white px-4 text-sm text-neutral-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-0 ${
 errors.inquiryType ? 'border-error focus-visible:ring-error' : 'border-neutral-300'
 }`}
 {...register('inquiryType')}
 >
 <option value="">Select topic...</option>
 <option value="pricing">Pricing Information</option>
 <option value="product">Product Features</option>
 <option value="partnership">Partnerships</option>
 <option value="other">Other</option>
 </select>
 {errors.inquiryType && <p className="text-body-sm text-error">{errors.inquiryType.message}</p>}
 </div>
 </div>

 <div className="space-y-2">
 <label htmlFor="message" className="text-body-sm font-medium text-neutral-900">
 Message <span className="text-error">*</span>
 </label>
 <textarea
 id="message"
 rows={4}
 className={`flex w-full rounded-md border bg-white p-4 text-sm text-neutral-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-0 ${
 errors.message ? 'border-error focus-visible:ring-error' : 'border-neutral-300'
 }`}
 {...register('message')}
 />
 {errors.message && <p className="text-body-sm text-error">{errors.message.message}</p>}
 </div>

 {serverError && (
 <div className="flex items-center gap-2 rounded-md bg-error/10 p-3 text-body-sm text-error">
 <AlertCircle className="h-4 w-4" />
 {serverError}
 </div>
 )}

 <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
 Send Message
 </Button>
 </form>
 )
}
