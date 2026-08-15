'use client'

import { forwardRef, type ComponentPropsWithoutRef, type ElementRef, type ReactNode } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const Modal = DialogPrimitive.Root
const ModalTrigger = DialogPrimitive.Trigger
const ModalClose = DialogPrimitive.Close
const ModalPortal = DialogPrimitive.Portal

const ModalOverlay = forwardRef<
 ElementRef<typeof DialogPrimitive.Overlay>,
 ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
 <DialogPrimitive.Overlay
 ref={ref}
 className={cn(
 'fixed inset-0 z-[200] bg-neutral-950/60 backdrop-blur-sm',
 'data-[state=open]:animate-[fade-in_200ms_ease-out]',
 'data-[state=closed]:animate-[fade-out_200ms_ease-out]',
 className
 )}
 {...props}
 />
))
ModalOverlay.displayName = DialogPrimitive.Overlay.displayName

const ModalContent = forwardRef<
 ElementRef<typeof DialogPrimitive.Content>,
 ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
 showClose?: boolean
 }
>(({ className, children, showClose = true, ...props }, ref) => (
 <ModalPortal>
 <ModalOverlay />
 <DialogPrimitive.Content
 ref={ref}
 className={cn(
 'fixed left-1/2 top-1/2 z-[201] w-full max-w-lg -translate-x-1/2 -translate-y-1/2',
 'rounded-md border border-neutral-200 bg-white p-6 shadow-nav',
 'focus-visible:outline-none',
 className
 )}
 {...props}
 >
 {children}
 {showClose && (
 <DialogPrimitive.Close
 className={cn(
 'absolute right-4 top-4 rounded-md p-1 text-neutral-500',
 'hover:bg-neutral-100 hover:text-neutral-900 transition-colors',
 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500'
 )}
 aria-label="Close"
 >
 <X className="h-5 w-5" />
 </DialogPrimitive.Close>
 )}
 </DialogPrimitive.Content>
 </ModalPortal>
))
ModalContent.displayName = DialogPrimitive.Content.displayName

function ModalHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
 return <div className={cn('flex flex-col gap-1.5 pr-8', className)} {...props} />
}

function ModalTitle({
 className,
 ...props
}: ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
 return (
 <DialogPrimitive.Title
 className={cn('font-display text-lg font-semibold text-neutral-900', className)}
 {...props}
 />
 )
}

function ModalDescription({
 className,
 ...props
}: ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
 return (
 <DialogPrimitive.Description
 className={cn('text-sm text-neutral-600', className)}
 {...props}
 />
 )
}

function ModalFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
 return (
 <div
 className={cn('mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
 {...props}
 />
 )
}

/** Full-screen modal variant for search overlay and mobile nav */
function ModalFullscreenContent({
 className,
 children,
 showClose = true,
 ...props
}: ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
 showClose?: boolean
 children: ReactNode
}) {
 return (
 <ModalPortal>
 <ModalOverlay />
 <DialogPrimitive.Content
 className={cn(
 'fixed inset-0 z-[201] flex flex-col bg-white focus-visible:outline-none',
 className
 )}
 {...props}
 >
 {children}
 {showClose && (
 <DialogPrimitive.Close
 className={cn(
 'absolute right-4 top-4 z-10 rounded-md p-2 text-neutral-600',
 'hover:bg-neutral-100 hover:text-neutral-900 transition-colors',
 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500'
 )}
 aria-label="Close"
 >
 <X className="h-5 w-5" />
 </DialogPrimitive.Close>
 )}
 </DialogPrimitive.Content>
 </ModalPortal>
 )
}

export {
 Modal,
 ModalTrigger,
 ModalClose,
 ModalPortal,
 ModalOverlay,
 ModalContent,
 ModalFullscreenContent,
 ModalHeader,
 ModalTitle,
 ModalDescription,
 ModalFooter,
}
