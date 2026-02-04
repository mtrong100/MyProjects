export interface Project {
    name: string;
    description: string;
    note: string;
    AI: string;
    tech: string;
    source: string;
    url: string;
    image: string;
}

export type SortField = "name" | "techCount" | "descriptionLength";
export type SortOrder = "asc" | "desc";
export type ViewMode = "grid" | "list" | "compact";
