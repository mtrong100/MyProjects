import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

export function LanguageToggle() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "vi" : "en";
        i18n.changeLanguage(newLang);
        localStorage.setItem("i18nextLng", newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border hover:bg-accent transition-colors text-sm font-medium"
        >
            <Languages size={16} />
            <span>{i18n.language === "en" ? "EN" : "VI"}</span>
        </button>
    );
}
