import { useMemo } from "react";
import { useProjects } from "../hooks/useProjects";
import { useTranslation } from "react-i18next";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend, AreaChart, Area
} from 'recharts';
import { useTheme } from "../hooks/useTheme";
import { motion } from "framer-motion";
import { TrendingUp, Award, Layers, Ghost, Target } from "lucide-react";

const COLORS = ['#8b5cf6', '#6366f1', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6'];

export function Analytics() {
    const { t } = useTranslation();
    const { projects, loading } = useProjects();
    const { resolvedTheme } = useTheme();

    const techData = useMemo(() => {
        const counts: Record<string, number> = {};
        projects.forEach(p => {
            p.techUsed?.split(',').forEach(t => {
                const tech = t.trim();
                counts[tech] = (counts[tech] || 0) + 1;
            });
        });
        return Object.entries(counts)
            .map(([name, value]) => ({ name, value }))
            .sort((a, b) => b.value - a.value)
            .slice(0, 12);
    }, [projects]);

    const assistanceData = useMemo(() => {
        const counts: Record<string, number> = {};
        projects.forEach(p => {
            if (p.assistance) {
                p.assistance.split(',').map(h => h.trim()).forEach(h => {
                    counts[h] = (counts[h] || 0) + 1;
                });
            }
        });
        return Object.entries(counts).map(([name, value]) => ({ name, value }));
    }, [projects]);

    const techCategories = useMemo(() => {
        const categories: Record<string, number> = {
            "React/JS": 0,
            "Styling": 0,
            "Typings": 0,
            "Frameworks": 0
        };
        projects.forEach(p => {
            const tech = p.techUsed?.toLowerCase() || "";
            if (tech.includes('react') || tech.includes('javascript')) categories["React/JS"]++;
            if (tech.includes('tailwind') || tech.includes('css')) categories["Styling"]++;
            if (tech.includes('typescript')) categories["Typings"]++;
            if (tech.includes('vite') || tech.includes('next')) categories["Frameworks"]++;
        });
        return Object.entries(categories).map(([name, value]) => ({ name, value }));
    }, [projects]);

    const complexityData = useMemo(() => {
        return projects.map(p => ({
            name: p.name,
            score: (p.techUsed?.split(',').length || 0) * 10 + (p.description?.length || 0) / 10
        })).sort((a, b) => b.score - a.score).slice(0, 8);
    }, [projects]);

    if (loading) return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
    );

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        show: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5 }
        })
    };

    return (
        <div className="space-y-8 sm:space-y-12 pb-4">
            <header className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-tight">
                    {t("nav.analytics")} <span className="gradient-text">{t("analytics.intelligence")}</span>
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg max-w-xl font-medium">
                    {t("analytics.subtitle")}
                </p>
            </header>

            {/* Responsive Stats Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                    { label: t("analytics.total_artifacts"), value: projects.length, icon: Layers, color: "bg-blue-500" },
                    { label: t("analytics.top_tech"), value: techData[0]?.name || "N/A", icon: Award, color: "bg-violet-500" },
                    { label: t("analytics.ai_collab"), value: assistanceData.length, icon: TrendingUp, color: "bg-pink-500" },
                    { label: t("analytics.velocity"), value: t("analytics.velocity_value"), icon: Ghost, color: "bg-amber-500" },
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        custom={i}
                        initial="hidden"
                        animate="show"
                        variants={cardVariants}
                        className="p-6 sm:p-8 rounded-3xl border border-border bg-card shadow-sm group hover:border-primary/50 transition-colors"
                    >
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl ${stat.color} flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform`}>
                            <stat.icon size={20} className="sm:size-24" />
                        </div>
                        <p className="text-[10px] sm:text-xs font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                        <h2 className="text-2xl sm:text-3xl font-black mt-1 sm:mt-2 tracking-tight line-clamp-1">{stat.value}</h2>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Tech Stack Distribution */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 sm:p-8 pb-10 sm:pb-12 rounded-3xl border border-border bg-card shadow-sm h-[400px] sm:h-[500px] flex flex-col"
                >
                    <div className="mb-6 sm:mb-8">
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight">{t("analytics.core_stack")}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground font-medium">{t("analytics.core_stack_sub")}</p>
                    </div>
                    <div className="flex-1 min-h-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={techData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke={resolvedTheme === 'dark' ? '#27272a' : '#e4e4e7'} vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    stroke={resolvedTheme === 'dark' ? '#a1a1aa' : '#71717a'}
                                    fontSize={10}
                                    tickLine={false}
                                    axisLine={false}
                                    dy={10}
                                />
                                <YAxis
                                    stroke={resolvedTheme === 'dark' ? '#a1a1aa' : '#71717a'}
                                    fontSize={10}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: resolvedTheme === 'dark' ? '#1c1917' : '#ffffff',
                                        border: '1px solid #2e2a27',
                                        borderRadius: '12px',
                                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
                                    }}
                                />
                                <Area type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* AI & Human Collaboration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 sm:p-8 pb-10 sm:pb-12 rounded-3xl border border-border bg-card shadow-sm h-[400px] sm:h-[500px] flex flex-col"
                >
                    <div className="mb-6 sm:mb-8">
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight">{t("analytics.top_assistance")}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground font-medium">{t("analytics.top_assistance_sub")}</p>
                    </div>
                    <div className="flex-1 min-h-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={assistanceData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    sm-innerRadius={80}
                                    sm-outerRadius={140}
                                    paddingAngle={8}
                                    dataKey="value"
                                >
                                    {assistanceData.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="transparent" />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: resolvedTheme === 'dark' ? '#1c1917' : '#ffffff',
                                        border: '1px solid #2e2a27',
                                        borderRadius: '12px'
                                    }}
                                />
                                <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ fontSize: '10px' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Complexity Score */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 sm:p-8 pb-10 sm:pb-12 rounded-3xl border border-border bg-card shadow-sm h-[400px] sm:h-[500px] flex flex-col"
                >
                    <div className="mb-6 sm:mb-8">
                        <div className="flex items-center gap-2 mb-1">
                            <Target size={18} className="text-primary sm:size-20" />
                            <h3 className="text-xl sm:text-2xl font-black tracking-tight">{t("analytics.complexity_score")}</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground font-medium">{t("analytics.complexity_score_sub")}</p>
                    </div>
                    <div className="flex-1 min-h-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={complexityData} layout="vertical" margin={{ left: 20, right: 30 }}>
                                <XAxis type="number" hide />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    width={80}
                                    fontSize={9}
                                    stroke={resolvedTheme === 'dark' ? '#a1a1aa' : '#71717a'}
                                    axisLine={false}
                                    tickLine={false}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: resolvedTheme === 'dark' ? '#1c1917' : '#ffffff',
                                        border: '1px solid #2e2a27',
                                        borderRadius: '12px'
                                    }}
                                />
                                <Bar dataKey="score" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={16} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Layer Composition */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 sm:p-8 pb-10 sm:pb-12 rounded-3xl border border-border bg-card shadow-sm h-[400px] sm:h-[500px] flex flex-col"
                >
                    <div className="mb-6 sm:mb-8">
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight">{t("analytics.layer_composition")}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground font-medium">{t("analytics.layer_composition_sub")}</p>
                    </div>
                    <div className="flex-1 min-h-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={techCategories} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={resolvedTheme === 'dark' ? '#27272a' : '#e4e4e7'} />
                                <XAxis
                                    dataKey="name"
                                    stroke={resolvedTheme === 'dark' ? '#a1a1aa' : '#71717a'}
                                    fontSize={10}
                                    axisLine={false}
                                    tickLine={false}
                                />
                                <YAxis hide />
                                <Tooltip
                                    cursor={{ fill: 'transparent' }}
                                    contentStyle={{
                                        backgroundColor: resolvedTheme === 'dark' ? '#1c1917' : '#ffffff',
                                        border: '1px solid #2e2a27',
                                        borderRadius: '12px'
                                    }}
                                />
                                <Bar dataKey="value" barSize={40} sm-barSize={60} radius={10}>
                                    {techCategories.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
