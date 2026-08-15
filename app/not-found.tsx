import Link from 'next/link'
import { Search, Home, Shield, BookOpen } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
 return (
 <>
 <Header />
 <main className="flex min-h-[70vh] flex-col items-center justify-center bg-neutral-50 px-6 py-24">
 <div className="container-content max-w-2xl text-center">
 <p className="label-eyebrow mb-4 text-brand-500">404 Error</p>
 <h1 className="mb-6 font-display text-display-xl font-bold text-neutral-900">
 Page Not Found
 </h1>
 <p className="mb-10 text-body-lg text-neutral-600">
 We couldn't find the page you're looking for. It might have been moved, renamed, or it might not exist.
 </p>
 
 <div className="mx-auto mb-12 flex max-w-lg items-center gap-3 rounded-md border border-neutral-300 bg-white px-4 py-3 shadow-sm focus-within:border-brand-500 focus-within:ring-1 focus-within:ring-brand-500">
 <Search className="h-5 w-5 text-neutral-600" />
 <input 
 type="text" 
 placeholder="Search Palo Alto Networks..." 
 className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none"
 />
 </div>

 <div className="grid gap-4 sm:grid-cols-3">
 <Link href="/" className="flex flex-col items-center gap-2 rounded-md border border-neutral-200 bg-white p-6 shadow-sm hover:border-brand-200 hover:shadow-md transition-all">
 <Home className="h-6 w-6 text-brand-500" />
 <span className="text-sm font-semibold text-neutral-900">Homepage</span>
 </Link>
 <Link href="/products/products-a-z" className="flex flex-col items-center gap-2 rounded-md border border-neutral-200 bg-white p-6 shadow-sm hover:border-brand-200 hover:shadow-md transition-all">
 <Shield className="h-6 w-6 text-brand-500" />
 <span className="text-sm font-semibold text-neutral-900">Products</span>
 </Link>
 <Link href="/resources" className="flex flex-col items-center gap-2 rounded-md border border-neutral-200 bg-white p-6 shadow-sm hover:border-brand-200 hover:shadow-md transition-all">
 <BookOpen className="h-6 w-6 text-brand-500" />
 <span className="text-sm font-semibold text-neutral-900">Resources</span>
 </Link>
 </div>
 </div>
 </main>
 <Footer />
 </>
 )
}
