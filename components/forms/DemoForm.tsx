'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, AlertCircle } from 'lucide-react'

const demoSchema = z.object({
 firstName: z.string().min(1, 'First name is required'),
 lastName: z.string().min(1, 'Last name is required'),
 email: z.string().email('Please enter a valid work email'),
 company: z.string().min(1, 'Company name is required'),
 country: z.string().min(1, 'Country is required'),
})

type DemoFormValues = z.infer<typeof demoSchema>

export function DemoForm() {
 const [isSuccess, setIsSuccess] = useState(false)
 const [serverError, setServerError] = useState<string | null>(null)

 const {
 register,
 handleSubmit,
 formState: { errors, isSubmitting },
 } = useForm<DemoFormValues>({
 resolver: zodResolver(demoSchema),
 })

 const onSubmit = async (data: DemoFormValues) => {
 setServerError(null)
 try {
 const response = await fetch('/api/demo-request', {
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
 <h3 className="mb-2 font-display text-body-xl font-semibold text-neutral-900">Request Received</h3>
 <p className="text-body-md text-neutral-600">
 Thank you for your interest. A product specialist will be in touch shortly to schedule your personalized demo.
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

 <div className="space-y-2">
 <label htmlFor="company" className="text-body-sm font-medium text-neutral-900">
 Company <span className="text-error">*</span>
 </label>
 <Input id="company" error={!!errors.company} {...register('company')} />
 {errors.company && <p className="text-body-sm text-error">{errors.company.message}</p>}
 </div>

 <div className="space-y-2">
 <label htmlFor="country" className="text-body-sm font-medium text-neutral-900">
 Country <span className="text-error">*</span>
 </label>
 <select
 id="country"
 className={`flex h-11 w-full rounded-md border bg-white px-4 text-sm text-neutral-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-0 ${
 errors.country ? 'border-error focus-visible:ring-error' : 'border-neutral-300'
 }`}
 {...register('country')}
 >
 <option value="">Select country...</option>
 <option value="US">United States</option>
 <option value="UK">United Kingdom</option>
 <option value="IN">India</option>
 <option value="AU">Australia</option>
 <option value="OTHER">Other</option>
 </select>
 {errors.country && <p className="text-body-sm text-error">{errors.country.message}</p>}
 </div>

 {serverError && (
 <div className="flex items-center gap-2 rounded-md bg-error/10 p-3 text-body-sm text-error">
 <AlertCircle className="h-4 w-4" />
 {serverError}
 </div>
 )}

 <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
 Submit Request
 </Button>
 
 <p className="text-center text-body-sm text-neutral-500">
 By submitting this form, you agree to our{' '}
  <a href="/legal/privacy" className="underline hover:text-neutral-900">
 Privacy Policy
 </a>
 .
 </p>
 </form>
 )
}
