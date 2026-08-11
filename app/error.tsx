'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react'
import Button from '@/components/ui/Button'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Error Boundary caught:', error)
  }, [error])

  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-neutral-50 px-6 py-24">
        <div className="container-content max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-error/10">
            <AlertTriangle className="h-8 w-8 text-error" />
          </div>
          <h1 className="mb-4 font-display text-display-lg font-bold text-neutral-900">
            Something went wrong
          </h1>
          <p className="mb-8 text-body-lg text-neutral-600">
            We encountered an unexpected error while loading this page. Our team has been notified.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button onClick={reset} variant="primary" className="gap-2">
              <RefreshCcw className="h-4 w-4" /> Try Again
            </Button>
            <Button href="/" variant="secondary" className="gap-2">
              <Home className="h-4 w-4" /> Return Home
            </Button>
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-12 rounded-md bg-neutral-900 p-4 text-left">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-error">Developer Details:</p>
              <pre className="overflow-auto text-xs text-neutral-300">
                {error.message}
                {'\n\n'}
                {error.stack}
              </pre>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
