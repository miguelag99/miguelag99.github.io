import { defineCollection, z } from "astro:content";
import { glob, file } from 'astro/loaders';

const journal_publications = defineCollection({
    schema: z.object({
        title: z.string(),
        journal: z.string(),
        authors: z.array(z.string()),
        teaser_url: z.string().url().optional(),
        paper_url: z.string().url().optional(),
        date: z.date(),
    }),
    loader: glob({ pattern: "**/*.md", base: "src/content/journal_pubs" }),
});

const conference_publications = defineCollection({
    schema: z.object({
        title: z.string(),
        conference: z.string(),
        authors: z.array(z.string()),
        teaser_url: z.string().url().optional(),
        paper_url: z.string().url().optional(),
        date: z.date(),
    }),
    loader: glob({ pattern: "**/*.md", base: "src/content/conference_pubs" }),
});

const undergrad_projects = defineCollection({
    schema: z.object({
        title: z.string(),
        student: z.string(),
        period: z.string(),
        codirector: z.string(),
        status: z.string(),
        grade: z.string(),
        topics: z.array(z.string()),
        description: z.string(),
    }),
    loader: glob({ pattern: "**/*.md", base: "src/content/undergraduate_theses" }),
});

const grad_projects = defineCollection({
    schema: z.object({
        title: z.string(),
        student: z.string(),
        period: z.string(),
        codirector: z.string(),
        status: z.string(),
        grade: z.string(),
        topics: z.array(z.string()),
        description: z.string(),
    }),
    loader: glob({ pattern: "**/*.md", base: "src/content/graduate_theses" }),
});

const undergrad_subjects = defineCollection({
    schema: z.object({
        title: z.string(),
        period: z.string(),
        institution: z.string(),
        status: z.string(),
        link: z.string().url().optional(),
        topics: z.array(z.string()),
        description: z.string(),
    }),
    loader: glob({ pattern: "**/*.md", base: "src/content/undergraduate_subjects" }),
});

const grad_subjects = defineCollection({
    schema: z.object({
        title: z.string(),
        period: z.string(),
        institution: z.string(),
        status: z.string(),
        link: z.string().url().optional(),
        topics: z.array(z.string()),
        description: z.string(),
    }),
    loader: glob({ pattern: "**/*.md", base: "src/content/graduate_subjects" }),
});

export const collections = {
    journal_publications,
    conference_publications,
    undergrad_projects,
    grad_projects,
    undergrad_subjects,
    grad_subjects
};