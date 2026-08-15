import { Skeleton } from '@/components/ui/Skeleton'

export default function Loading() {
 return (
 <div className="container-content animate-in fade-in duration-500 py-12">
 <Skeleton className="mb-8 h-12 w-2/3 max-w-2xl" />
 <Skeleton className="mb-12 h-6 w-full max-w-3xl" />
 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
 <Skeleton className="h-64 w-full" />
 <Skeleton className="h-64 w-full" />
 <Skeleton className="h-64 w-full" />
 </div>
 </div>
 )
}
