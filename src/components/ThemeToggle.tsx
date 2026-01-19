import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
// removed unused motion import

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center gap-1 bg-secondary p-1 rounded-full border border-border">
            <button
                onClick={() => setTheme("light")}
                className={`p-1.5 rounded-full transition-all ${theme === "light" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
                title="Light Mode"
            >
                <Sun size={16} />
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={`p-1.5 rounded-full transition-all ${theme === "dark" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
                title="Dark Mode"
            >
                <Moon size={16} />
            </button>
            <button
                onClick={() => setTheme("system")}
                className={`p-1.5 rounded-full transition-all ${theme === "system" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
                title="System Mode"
            >
                <Monitor size={16} />
            </button>
        </div>
    );
}
