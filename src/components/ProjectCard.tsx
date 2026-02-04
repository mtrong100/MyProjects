import { ExternalLink, Github, Sparkles, Layout, Cpu, Link } from "lucide-react";
import type { Project } from "../types/index";
import { useTranslation } from "react-i18next";
import { useToast } from "../context/ToastContext";

interface ProjectCardProps {
    project: Project;
    variant?: "grid" | "list" | "compact";
}

export function ProjectCard({ project, variant = "grid" }: ProjectCardProps) {
    const { t } = useTranslation();
    const { showToast } = useToast();
    const techList = project.tech?.split(",").map((t: string) => t.trim()) || [];

    const handleCopy = (link: string) => {
        navigator.clipboard.writeText(link);
        showToast(t("common.link_copied"), "success");
    };

    if (variant === "compact") {
        return (
            <div className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all shadow-sm hover:shadow-md h-full">
                <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                    {project.image ? (
                        <img src={project.image} alt={project.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                    ) : (
                        <div className="flex items-center justify-center h-full text-muted-foreground/30"><Layout size={24} /></div>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="font-bold text-base line-clamp-1 group-hover:text-primary transition-colors">{project.name}</h3>
                    <div className="mt-2 flex items-center justify-between">
                        <span className="text-[10px] text-muted-foreground font-medium">{techList[0]}</span>
                        <div className="flex gap-2">
                            {project.url && (
                                <button
                                    onClick={() => handleCopy(project.url!)}
                                    className="text-muted-foreground hover:text-primary cursor-pointer"
                                    title={t("common.copy_link")}
                                >
                                    <Link size={12} />
                                </button>
                            )}
                            {project.url && <a href={project.url} target="_blank" className="text-muted-foreground hover:text-primary"><ExternalLink size={12} /></a>}
                            {project.source && <a href={project.source} target="_blank" className="text-muted-foreground hover:text-primary"><Github size={12} /></a>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (variant === "list") {
        return (
            <div className="group relative flex flex-col md:flex-row gap-6 p-4 rounded-2xl border border-border bg-card hover:bg-accent/5 transition-all shadow-sm hover:shadow-xl">
                <div className="w-full md:w-64 aspect-[16/10] overflow-hidden rounded-xl h-fit">
                    {project.image ? (
                        <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
                    ) : (
                        <div className="flex items-center justify-center h-full bg-accent/20"><Layout size={32} /></div>
                    )}
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-2xl group-hover:text-primary transition-colors">{project.name}</h3>
                        {project.AI && (
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-[10px] font-black text-primary uppercase border border-primary/20">{project.AI}</span>
                        )}
                    </div>
                    {project.note && (
                        <p className="text-xs font-bold text-primary mb-2 italic">Note: {project.note}</p>
                    )}
                    <p className="text-muted-foreground text-base line-clamp-2 mb-4 max-w-2xl">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {techList.map((tech: string) => (
                            <span key={tech} className="px-2.5 py-1 rounded-lg bg-secondary text-[10px] font-bold text-secondary-foreground border border-border/30">{tech}</span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {project.url && (
                            <a href={project.url} target="_blank" className="flex items-center gap-2 px-6 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-black shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                                <ExternalLink size={16} /> {t("common.view_demo")}
                            </a>
                        )}
                        {project.url && (
                            <button
                                onClick={() => handleCopy(project.url!)}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-accent text-sm font-black transition-all cursor-pointer"
                            >
                                <Link size={18} /> {t("common.copy_link")}
                            </button>
                        )}
                        {project.source && (
                            <a href={project.source} target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-accent text-sm font-black transition-all">
                                <Github size={18} /> {t("common.source_code")}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Default Grid (Premium)
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all h-full">
            {/* Image Section */}
            <div className="aspect-video overflow-hidden bg-muted relative">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) group-hover:scale-110"
                        loading="lazy"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground bg-accent/20">
                        <Layout size={48} className="opacity-20" />
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl leading-snug sm:leading-tight group-hover:text-primary transition-colors line-clamp-2 mb-2 sm:mb-3">
                    {project.name}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                </p>

                {project.note && (
                    <div className="mb-4 px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10">
                        <p className="text-[10px] sm:text-[11px] font-bold text-primary italic leading-tight">
                            {project.note}
                        </p>
                    </div>
                )}

                <div className="space-y-4 mb-6">
                    {project.AI && (
                        <div className="flex flex-wrap gap-2">
                            {project.AI.split(",").map((ai: string, idx: number) => (
                                <span
                                    key={idx}
                                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase border shadow-sm transition-all
                                        ${idx % 3 === 0 ? 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20' :
                                            idx % 3 === 1 ? 'bg-fuchsia-500/10 text-fuchsia-500 border-fuchsia-500/20' :
                                                'bg-rose-500/10 text-rose-500 border-rose-500/20'}`}
                                >
                                    <Sparkles size={10} className="animate-pulse" />
                                    {ai.trim()}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                        {techList.slice(0, 6).map((tech: string, idx: number) => (
                            <span
                                key={tech}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-bold border transition-all shadow-sm
                                    ${idx % 4 === 0 ? 'bg-blue-500/5 text-blue-500 border-blue-500/20 hover:bg-blue-500/10' :
                                        idx % 4 === 1 ? 'bg-emerald-500/5 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/10' :
                                            idx % 4 === 2 ? 'bg-amber-500/5 text-amber-500 border-amber-500/20 hover:bg-amber-500/10' :
                                                'bg-violet-500/5 text-violet-500 border-violet-500/20 hover:bg-violet-500/10'}`}
                            >
                                <Cpu size={10} className="opacity-70" />
                                {tech}
                            </span>
                        ))}
                        {techList.length > 6 && (
                            <span className="px-2 py-1 bg-muted/50 rounded-lg text-[10px] text-muted-foreground font-black border border-border/30">
                                +{techList.length - 6}
                            </span>
                        )}
                    </div>
                </div>

                <div className="mt-auto flex items-center gap-2 lg:gap-3">
                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-black shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all group/btn"
                        >
                            <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform" />
                            {t("common.view_demo")}
                        </a>
                    )}
                    {project.url && (
                        <button
                            onClick={() => handleCopy(project.url!)}
                            className="flex items-center justify-center p-3 rounded-xl border border-border bg-background text-foreground hover:bg-accent hover:text-primary transition-all hover:border-primary/30 shadow-sm cursor-pointer"
                            title={t("common.copy_link")}
                        >
                            <Link size={20} />
                        </button>
                    )}
                    {project.source && project.source.startsWith('http') && (
                        <a
                            href={project.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-3 rounded-xl border border-border bg-background text-foreground hover:bg-accent hover:text-primary transition-all hover:border-primary/30 shadow-sm"
                            title={t("common.source_code")}
                        >
                            <Github size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
