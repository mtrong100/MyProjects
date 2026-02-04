import React from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Layout({ children }: { children: React.ReactNode }) {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-4 sm:pb-8"
                >
                    {children}
                </motion.div>
            </main>
            <footer className="border-t border-border py-12 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left mb-12">
                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <div className="w-10 h-10 overflow-hidden flex items-center justify-center transition-all duration-500">
                                    <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
                                </div>
                                <span className="font-black text-xl tracking-tight gradient-text">{t("app.title")}</span>
                            </div>
                            <p className="text-sm max-w-xs mx-auto md:mx-0">
                                {t("app.subtitle")}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold text-foreground">{t("nav.home")}</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground font-medium">
                                <li><a href="#" className="hover:text-primary transition-colors">{t("app.masterpieces")}</a></li>
                                <li><a href="/analytics" className="hover:text-primary transition-colors">{t("nav.analytics")}</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold text-foreground">Connect</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground font-medium">
                                <li><a href="https://github.com/TrongSigmaPro" target="_blank" className="hover:text-primary transition-colors">GitHub</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Project Tracker. Built by <span className="font-bold text-primary italic">TrongSigmaPro</span>.
                        </p>
                        {/* <div className="flex items-center gap-6">
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary/50">One UI 6 Style</span>
                        </div> */}
                    </div>
                </div>
            </footer>
        </div>
    );
}
