import React from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-4 sm:pb-8"
                >
                    {children}
                </motion.div>
            </main>
            <footer className="border-t border-border py-8 bg-muted/30">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} MyProjects. Crafted by <span className="font-bold text-primary italic">TrongSigmaPro</span>.
                    </p>
                </div>
            </footer>
        </div>
    );
}
