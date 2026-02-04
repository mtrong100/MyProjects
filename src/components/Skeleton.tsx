import { Layout } from "lucide-react";

export function ProjectSkeleton() {
    return (
        <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg h-full animate-pulse">
            <div className="aspect-video bg-muted flex items-center justify-center">
                <Layout size={48} className="text-muted-foreground/20" />
            </div>
            <div className="flex flex-1 flex-col p-6 space-y-4">
                <div className="h-7 bg-muted rounded-lg w-3/4" />
                <div className="space-y-2">
                    <div className="h-4 bg-muted rounded-lg w-full" />
                    <div className="h-4 bg-muted rounded-lg w-5/6" />
                </div>
                <div className="h-10 bg-muted rounded-lg w-1/3" />
                <div className="flex flex-wrap gap-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 bg-muted rounded-xl w-16" />
                    ))}
                </div>
                <div className="mt-auto flex items-center gap-3">
                    <div className="h-12 bg-muted rounded-xl flex-1" />
                    <div className="h-12 bg-muted rounded-xl w-12" />
                    <div className="h-12 bg-muted rounded-xl w-12" />
                </div>
            </div>
        </div>
    );
}

export function StatSkeleton() {
    return (
        <div className="p-6 sm:p-8 rounded-3xl border border-border bg-card animate-pulse">
            <div className="w-12 h-12 rounded-2xl bg-muted mb-6" />
            <div className="h-3 bg-muted rounded w-20 mb-3" />
            <div className="h-8 bg-muted rounded w-32" />
        </div>
    );
}

export function ChartSkeleton() {
    return (
        <div className="p-6 sm:p-8 rounded-3xl border border-border bg-card h-[400px] sm:h-[500px] animate-pulse">
            <div className="mb-8 space-y-2">
                <div className="h-6 bg-muted rounded w-1/3" />
                <div className="h-4 bg-muted rounded w-1/2" />
            </div>
            <div className="flex-1 bg-muted/50 rounded-2xl h-[280px] sm:h-[350px]" />
        </div>
    );
}
