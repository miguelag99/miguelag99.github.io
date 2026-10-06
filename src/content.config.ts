import { defineCollection, type SchemaContext } from "astro:content";
import { z } from "astro/zod";
import { glob } from 'astro/loaders';

// Fields shared by every publication type, each one gets its own detail page at /publications/<file name>
const publicationFields = ({ image }: SchemaContext) => ({
    title: z.string(),
    authors: z.array(z.string()),
    date: z.date(),
    // Path relative to the .md file, e.g. ../../assets/teasers/paper.png
    teaser: image().optional(),
    paper_url: z.url().optional(),
    arxiv_url: z.url().optional(),
    code_url: z.url().optional(),
    project_url: z.url().optional(),
    weights_url: z.url().optional(),
    doi: z.string().optional(),
    bibtex: z.string().optional(),
});

const journal_publications = defineCollection({
    schema: (ctx) => z.object({
        ...publicationFields(ctx),
        journal: z.string(),
    }),
    loader: glob({ pattern: "**/*.md", base: "src/content/journal_pubs" }),
});

const conference_publications = defineCollection({
    schema: (ctx) => z.object({
        ...publicationFields(ctx),
        conference: z.string(),
    }),
    loader: glob({ pattern: "**/*.md", base: "src/content/conference_pubs" }),
});

const preprints = defineCollection({
    schema: (ctx) => z.object({
        ...publicationFields(ctx),
        venue: z.string().default('arXiv preprint'),
        status: z.string().optional(),
    }),
    loader: glob({ pattern: "**/*.md", base: "src/content/preprints" }),
});

const undergrad_projects = defineCollection({
    schema: z.object({
        title: z.string(),
        student: z.string(),
        period: z.string(),
        codirector: z.string(),
        status: z.string(),
        grade: z.string(),
        description: z.string(),
    }),
    loader: glob({ pattern: "**/*.md", base: "src/content/undergraduate_theses" }),
});

const undergrad_subjects = defineCollection({
    schema: z.object({
        title: z.string(),
        period: z.string(),
        institution: z.string(),
        status: z.string(),
        link: z.url().optional(),
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
        link: z.url().optional(),
        description: z.string(),
    }),
    loader: glob({ pattern: "**/*.md", base: "src/content/graduate_subjects" }),
});

export const collections = {
    journal_publications,
    conference_publications,
    preprints,
    undergrad_projects,
    undergrad_subjects,
    grad_subjects
};
