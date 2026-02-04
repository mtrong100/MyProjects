import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { LayoutGrid, BarChart3, Menu, X, ChevronRight, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import { usePWA } from "../hooks/usePWA";

export function Navbar() {
    const { t } = useTranslation();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { isInstallable, installApp } = usePWA();

    const links = [
        { to: "/", icon: <LayoutGrid size={20} />, label: t("nav.home") },
        { to: "/analytics", icon: <BarChart3 size={20} />, label: t("nav.analytics") },
    ];

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <>
            <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 shrink-0 group">
                        <div className="w-10 h-10 overflow-hidden flex items-center justify-center transition-all duration-500">
                            <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-black text-xl tracking-tight gradient-text">{t("app.title")}</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1 lg:gap-2">
                        {links.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${location.pathname === link.to
                                    ? "text-primary bg-primary/5"
                                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                    }`}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                                {location.pathname === link.to && (
                                    <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full" />
                                )}
                            </Link>
                        ))}
                        <div className="h-4 w-[1px] bg-border mx-3" />
                        <div className="flex items-center gap-3">
                            {isInstallable && (
                                <button
                                    onClick={installApp}
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20 cursor-pointer"
                                >
                                    <Download size={18} />
                                    <span>{t("common.install")}</span>
                                </button>
                            )}
                            <LanguageToggle />
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex md:hidden items-center gap-2">
                        {isInstallable && (
                            <button
                                onClick={installApp}
                                className="p-2 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                aria-label={t("common.install")}
                            >
                                <Download size={20} />
                            </button>
                        )}
                        <button
                            onClick={toggleSidebar}
                            className="p-2 rounded-xl hover:bg-accent transition-colors"
                            aria-label="Toggle Menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <>
                    <div
                        onClick={toggleSidebar}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
                    />
                    <aside
                        className="fixed top-0 right-0 bottom-0 w-[280px] bg-background border-l border-border z-[70] md:hidden shadow-2xl flex flex-col"
                    >
                        <div className="p-4 flex items-center justify-between border-b border-border">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 overflow-hidden flex items-center justify-center transition-all duration-500">
                                    <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
                                </div>
                                <span className="font-black text-primary tracking-tight">{t("app.title")}</span>
                            </div>
                            <button
                                onClick={toggleSidebar}
                                className="p-2 rounded-xl hover:bg-accent transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 p-4 flex flex-col gap-2">
                            {links.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={toggleSidebar}
                                    className={`flex items-center justify-between px-4 py-4 rounded-2xl text-base font-bold transition-all ${location.pathname === link.to
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                        : "text-muted-foreground hover:bg-accent"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        {link.icon}
                                        <span>{link.label}</span>
                                    </div>
                                    <ChevronRight size={18} className={location.pathname === link.to ? "opacity-100" : "opacity-30"} />
                                </Link>
                            ))}

                            {isInstallable && (
                                <button
                                    onClick={() => {
                                        installApp();
                                        toggleSidebar();
                                    }}
                                    className="mt-4 flex items-center justify-between px-4 py-4 rounded-2xl text-base font-bold transition-all bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                                >
                                    <div className="flex items-center gap-3">
                                        <Download size={20} />
                                        <span>{t("common.install")}</span>
                                    </div>
                                    <ChevronRight size={18} />
                                </button>
                            )}
                        </div>

                        <div className="p-6 border-t border-border bg-accent/20">
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">Settings</p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold">Language</span>
                                    <LanguageToggle />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold">Theme</span>
                                    <ThemeToggle />
                                </div>
                            </div>
                        </div>
                    </aside>
                </>
            )}
        </>
    );
}
