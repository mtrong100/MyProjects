import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import type { Project } from '../types/index';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1eyJ1EReaig8bkaHwHgDoNtvlLO2XSxxE3VrMRP3YHeA/export?format=csv';

export function useProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(SHEET_URL);
                const csvData = await response.text();

                Papa.parse(csvData, {
                    header: true,
                    complete: (results) => {
                        setProjects(results.data as Project[]);
                        setLoading(false);
                    },
                    error: (err: Error) => {
                        setError(err.message);
                        setLoading(false);
                    }
                });
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return { projects, loading, error };
}
