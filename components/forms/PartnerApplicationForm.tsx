'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, AlertCircle } from 'lucide-react'

const partnerSchema = z.object({
 firstName: z.string().min(1, 'First name is required'),
 lastName: z.string().min(1, 'Last name is required'),
 email: z.string().email('Please enter a valid work email'),
 company: z.string().min(1, 'Company name is required'),
 website: z.string().url('Please enter a valid URL (e.g. https://example.com)'),
 country: z.string().min(1, 'Please select a country'),
 partnerType: z.string().min(1, 'Please select a partner type'),
 companySize: z.string().min(1, 'Please select company size'),
 message: z.string().optional(),
})

type PartnerFormValues = z.infer<typeof partnerSchema>

export function PartnerApplicationForm() {
 const [isSuccess, setIsSuccess] = useState(false)
 const [serverError, setServerError] = useState<string | null>(null)

 const {
 register,
 handleSubmit,
 formState: { errors, isSubmitting },
 } = useForm<PartnerFormValues>({
 resolver: zodResolver(partnerSchema),
 })

 const onSubmit = async (data: PartnerFormValues) => {
 setServerError(null)
 try {
 const response = await fetch('/api/partner-application', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify(data),
 })
 if (!response.ok) {
 throw new Error('Something went wrong')
 }
 setIsSuccess(true)
 } catch (error) {
 setServerError('Failed to submit application. Please try again.')
 }
 }

 if (isSuccess) {
 return (
 <div className="rounded-lg border border-brand-100 bg-brand-50 p-8 text-center animate-in fade-in zoom-in duration-300">
 <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-brand-500" />
 <h3 className="mb-2 font-display text-body-xl font-semibold text-neutral-900">Application Received</h3>
 <p className="text-body-md text-neutral-600">
 Thank you for applying to the NextWave Partner Program. Our team will review your application and contact you shortly.
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
 Company Name <span className="text-error">*</span>
 </label>
 <Input id="company" error={!!errors.company} {...register('company')} />
 {errors.company && <p className="text-body-sm text-error">{errors.company.message}</p>}
 </div>

 <div className="space-y-2">
 <label htmlFor="website" className="text-body-sm font-medium text-neutral-900">
 Company Website <span className="text-error">*</span>
 </label>
 <Input id="website" type="url" placeholder="https://" error={!!errors.website} {...register('website')} />
 {errors.website && <p className="text-body-sm text-error">{errors.website.message}</p>}
 </div>
 </div>

 <div className="grid gap-6 sm:grid-cols-3">
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
 <option value="us">United States</option>
 <option value="ca">Canada</option>
 <option value="uk">United Kingdom</option>
 <option value="in">India</option>
 <option value="au">Australia</option>
 <option value="other">Other</option>
 </select>
 {errors.country && <p className="text-body-sm text-error">{errors.country.message}</p>}
 </div>

 <div className="space-y-2">
 <label htmlFor="partnerType" className="text-body-sm font-medium text-neutral-900">
 Partner Type <span className="text-error">*</span>
 </label>
 <select
 id="partnerType"
 className={`flex h-11 w-full rounded-md border bg-white px-4 text-sm text-neutral-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-0 ${
 errors.partnerType ? 'border-error focus-visible:ring-error' : 'border-neutral-300'
 }`}
 {...register('partnerType')}
 >
 <option value="">Select type...</option>
 <option value="reseller">Reseller / VAR</option>
 <option value="mssp">MSSP</option>
 <option value="technology">Technology Alliance</option>
 <option value="distributor">Distributor</option>
 </select>
 {errors.partnerType && <p className="text-body-sm text-error">{errors.partnerType.message}</p>}
 </div>

 <div className="space-y-2">
 <label htmlFor="companySize" className="text-body-sm font-medium text-neutral-900">
 Company Size <span className="text-error">*</span>
 </label>
 <select
 id="companySize"
 className={`flex h-11 w-full rounded-md border bg-white px-4 text-sm text-neutral-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-0 ${
 errors.companySize ? 'border-error focus-visible:ring-error' : 'border-neutral-300'
 }`}
 {...register('companySize')}
 >
 <option value="">Select size...</option>
 <option value="1-50">1-50 employees</option>
 <option value="51-200">51-200 employees</option>
 <option value="201-1000">201-1,000 employees</option>
 <option value="1001+">1,001+ employees</option>
 </select>
 {errors.companySize && <p className="text-body-sm text-error">{errors.companySize.message}</p>}
 </div>
 </div>

 <div className="space-y-2">
 <label htmlFor="message" className="text-body-sm font-medium text-neutral-900">
 Additional Details (Optional)
 </label>
 <textarea
 id="message"
 rows={3}
 className="flex w-full rounded-md border border-neutral-300 bg-white p-4 text-sm text-neutral-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-0"
 {...register('message')}
 />
 </div>

 {serverError && (
 <div className="flex items-center gap-2 rounded-md bg-error/10 p-3 text-body-sm text-error">
 <AlertCircle className="h-4 w-4" />
 {serverError}
 </div>
 )}

 <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
 Submit Application
 </Button>
 </form>
 )
}
