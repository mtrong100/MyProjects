import { useState, useMemo, useEffect } from "react";
import { useProjects } from "../hooks/useProjects";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectSkeleton } from "../components/Skeleton";
import { Search, ArrowUpDown, Filter, X, Grid, List as ListIcon, LayoutGrid, ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { SortField, SortOrder, ViewMode } from "../types/index";

export function Home() {
    const { t } = useTranslation();
    const { projects, loading } = useProjects();
    const [search, setSearch] = useState("");
    const [techFilter, setTechFilter] = useState("All");
    const [assistanceFilter, setAssistanceFilter] = useState("All");
    const [sortField, setSortField] = useState<SortField>("name");
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
    const [viewMode, setViewMode] = useState<ViewMode>("grid");
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 400);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const techOptions = useMemo(() => {
        const techs = new Set<string>();
        projects.forEach((p) => {
            p.tech?.split(",").forEach((t) => techs.add(t.trim()));
        });
        return ["All", ...Array.from(techs).sort()];
    }, [projects]);

    const assistanceOptions = useMemo(() => {
        const assistances = new Set<string>();
        projects.forEach((p) => {
            if (p.AI) p.AI.split(",").forEach(a => assistances.add(a.trim()));
        });
        return ["All", ...Array.from(assistances).sort()];
    }, [projects]);

    const filteredProjects = useMemo(() => {
        return projects
            .filter((p) => {
                const matchesSearch =
                    p.name?.toLowerCase().includes(search.toLowerCase()) ||
                    p.description?.toLowerCase().includes(search.toLowerCase()) ||
                    p.note?.toLowerCase().includes(search.toLowerCase()) ||
                    p.tech?.toLowerCase().includes(search.toLowerCase());
                const matchesTech = techFilter === "All" || p.tech?.includes(techFilter);
                const matchesAssistance = assistanceFilter === "All" || p.AI?.includes(assistanceFilter);
                return matchesSearch && matchesTech && matchesAssistance;
            })
            .sort((a, b) => {
                let valA: any, valB: any;

                if (sortField === "name") {
                    valA = (a.name || "").toLowerCase();
                    valB = (b.name || "").toLowerCase();
                } else if (sortField === "techCount") {
                    valA = a.tech?.split(",").length || 0;
                    valB = b.tech?.split(",").length || 0;
                } else if (sortField === "descriptionLength") {
                    valA = a.description?.length || 0;
                    valB = b.description?.length || 0;
                }

                if (sortOrder === "asc") return valA > valB ? 1 : -1;
                return valA < valB ? 1 : -1;
            });
    }, [projects, search, techFilter, assistanceFilter, sortField, sortOrder]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (loading) {
        return (
            <div className="space-y-12 pb-4">
                <header className="text-center space-y-6 max-w-3xl mx-auto py-12">
                    <div className="h-20 bg-muted rounded-2xl w-3/4 mx-auto animate-pulse mb-8" />
                    <div className="h-6 bg-muted rounded-xl w-full mx-auto animate-pulse" />
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <ProjectSkeleton key={i} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-12 pb-4">
            {/* Header Section */}
            <header className="text-center space-y-6 max-w-3xl mx-auto py-12">
                <div>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[1.1] sm:leading-[1] mb-6 sm:mb-8">
                        {t("app.explore")} <span className="gradient-text">{t("app.masterpieces")}</span>
                    </h1>
                    <p className="text-base sm:text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
                        {t("app.hero_text")}
                    </p>
                </div>
            </header>

            {/* Filter & Sort Controls (Non-sticky) */}
            <div className="space-y-6">
                <div className="bg-card rounded-3xl p-6 shadow-2xl shadow-primary/5 border border-primary/10 flex flex-col gap-6">
                    {/* Top Row: Search & Order */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder={t("search.placeholder")}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-12 pr-10 py-4 rounded-2xl bg-background/50 border border-transparent focus:border-primary/30 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all font-medium text-lg"
                            />
                            {search && (
                                <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full">
                                    <X size={16} />
                                </button>
                            )}
                        </div>
                        <button
                            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                            className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-black hover:opacity-90 transition-all shadow-xl shadow-primary/20"
                        >
                            <ArrowUpDown size={18} className={sortOrder === "desc" ? "rotate-180 transition-transform duration-300" : "transition-transform duration-300"} />
                            <span className="whitespace-nowrap">{sortOrder === 'asc' ? t("sort.az") : t("sort.za")}</span>
                        </button>
                    </div>

                    {/* Bottom Row: Triple Filters & View Select */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Tech Filter */}
                        <div className="relative">
                            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                            <select
                                value={techFilter}
                                onChange={(e) => setTechFilter(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-background/50 border border-transparent focus:border-primary/30 focus:outline-none appearance-none cursor-pointer font-bold text-sm"
                            >
                                <option value="All">{t("filter.all_tech")}</option>
                                {techOptions.filter(t => t !== "All").map((tech) => (
                                    <option key={tech} value={tech}>{tech}</option>
                                ))}
                            </select>
                        </div>

                        {/* Assistance Filter */}
                        <div className="relative">
                            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                            <select
                                value={assistanceFilter}
                                onChange={(e) => setAssistanceFilter(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-background/50 border border-transparent focus:border-primary/30 focus:outline-none appearance-none cursor-pointer font-bold text-sm"
                            >
                                <option value="All">{t("filter.all_assistance")}</option>
                                {assistanceOptions.filter(a => a !== "All").map((a) => (
                                    <option key={a} value={a}>{a}</option>
                                ))}
                            </select>
                        </div>

                        {/* Sort Field */}
                        <div className="relative">
                            <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                            <select
                                value={sortField}
                                onChange={(e) => setSortField(e.target.value as SortField)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-background/50 border border-transparent focus:border-primary/30 focus:outline-none appearance-none cursor-pointer font-bold text-sm"
                            >
                                <option value="name">{t("sort.name")}</option>
                                <option value="techCount">{t("sort.techCount")}</option>
                                <option value="descriptionLength">{t("sort.descriptionLength")}</option>
                            </select>
                        </div>

                        {/* View Mode Toggle */}
                        <div className="grid grid-cols-3 items-center gap-1 bg-background/50 p-1 rounded-xl border border-transparent overflow-hidden">
                            {[
                                { mode: "grid", icon: LayoutGrid, label: "Grid 3" },
                                { mode: "compact", icon: Grid, label: "Grid 4" },
                                { mode: "list", icon: ListIcon, label: t("view.list") }
                            ].map((item) => (
                                <button
                                    key={item.mode}
                                    onClick={() => setViewMode(item.mode as ViewMode)}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg transition-all ${viewMode === item.mode ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-accent text-muted-foreground"}`}
                                    title={item.label}
                                >
                                    <item.icon size={16} className="shrink-0" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between px-2">
                    <span className="text-xs font-black text-muted-foreground tracking-widest uppercase">
                        {filteredProjects.length} {t("common.projects_found")}
                    </span>
                    <div className="h-px flex-1 bg-border mx-8 hidden sm:block opacity-20" />
                </div>
            </div>

            {/* Results Grid/List */}
            <div>
                {filteredProjects.length > 0 ? (
                    <div
                        className={
                            viewMode === "grid"
                                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                : viewMode === "compact"
                                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                                    : "flex flex-col gap-6"
                        }
                    >
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.name}
                                project={project}
                                variant={viewMode === "list" ? "list" : viewMode === "compact" ? "compact" : "grid"}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="py-32 text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent text-accent-foreground mb-8">
                            <Search size={40} />
                        </div>
                        <h2 className="text-3xl font-black mb-4">{t("empty.title")}</h2>
                        <p className="text-muted-foreground text-lg mb-8">{t("empty.subtitle")}</p>
                        <button onClick={() => { setSearch(""); setTechFilter("All"); setAssistanceFilter("All"); }} className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold shadow-lg">
                            {t("empty.reset")}
                        </button>
                    </div>
                )}
            </div>

            {/* Scroll to Top */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[100] p-4 rounded-2xl bg-primary text-primary-foreground shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-all"
                    aria-label={t("scroll_top")}
                >
                    <ArrowUp size={24} />
                </button>
            )}
        </div>
    );
}
