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
    const techList = project.techUsed?.split(",").map((t) => t.trim()) || [];

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
                            {project.demoLink && (
                                <button
                                    onClick={() => handleCopy(project.demoLink!)}
                                    className="text-muted-foreground hover:text-primary cursor-pointer"
                                    title={t("common.copy_link")}
                                >
                                    <Link size={12} />
                                </button>
                            )}
                            {project.demoLink && <a href={project.demoLink} target="_blank" className="text-muted-foreground hover:text-primary"><ExternalLink size={12} /></a>}
                            {project.sourceCode && <a href={project.sourceCode} target="_blank" className="text-muted-foreground hover:text-primary"><Github size={12} /></a>}
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
                        {project.assistance && (
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-[10px] font-black text-primary uppercase border border-primary/20">{project.assistance}</span>
                        )}
                    </div>
                    <p className="text-muted-foreground text-base line-clamp-2 mb-4 max-w-2xl">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {techList.map((tech) => (
                            <span key={tech} className="px-2.5 py-1 rounded-lg bg-secondary text-[10px] font-bold text-secondary-foreground border border-border/30">{tech}</span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {project.demoLink && (
                            <a href={project.demoLink} target="_blank" className="flex items-center gap-2 px-6 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-black shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                                <ExternalLink size={16} /> {t("common.view_demo")}
                            </a>
                        )}
                        {project.demoLink && (
                            <button
                                onClick={() => handleCopy(project.demoLink!)}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-accent text-sm font-black transition-all cursor-pointer"
                            >
                                <Link size={18} /> {t("common.copy_link")}
                            </button>
                        )}
                        {project.sourceCode && (
                            <a href={project.sourceCode} target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-accent text-sm font-black transition-all">
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
            <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-col items-start justify-between mb-3 gap-3">
                    {project.assistance && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 text-[11px] font-black text-primary uppercase border border-primary/20 shadow-sm">
                            <Sparkles size={11} className="animate-pulse" />
                            {project.assistance}
                        </span>
                    )}
                    <h3 className="font-bold md:text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {project.name}
                    </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {techList.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary/80 text-secondary-foreground text-[10px] font-bold border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all shadow-sm"
                        >
                            <Cpu size={10} className="text-primary/70" />
                            {tech}
                        </span>
                    ))}
                    {techList.length > 4 && (
                        <span className="px-2 py-1 bg-muted/50 rounded-lg text-[10px] text-muted-foreground font-black border border-border/30">
                            +{techList.length - 4}
                        </span>
                    )}
                </div>

                <div className="mt-auto flex items-center gap-2 lg:gap-3">
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-black shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all group/btn"
                        >
                            <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform" />
                            {t("common.view_demo")}
                        </a>
                    )}
                    {project.demoLink && (
                        <button
                            onClick={() => handleCopy(project.demoLink!)}
                            className="flex items-center justify-center p-3 rounded-xl border border-border bg-background text-foreground hover:bg-accent hover:text-primary transition-all hover:border-primary/30 shadow-sm cursor-pointer"
                            title={t("common.copy_link")}
                        >
                            <Link size={20} />
                        </button>
                    )}
                    {project.sourceCode && project.sourceCode.startsWith('http') && (
                        <a
                            href={project.sourceCode}
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
