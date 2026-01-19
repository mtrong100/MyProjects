export interface Project {
    name: string;
    description: string;
    assistance: string;
    techUsed: string;
    sourceCode: string;
    demoLink: string;
    image: string;
}

export type SortField = "name" | "techCount" | "descriptionLength";
export type SortOrder = "asc" | "desc";
export type ViewMode = "grid" | "list" | "compact";
