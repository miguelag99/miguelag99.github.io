import { getCollection, type CollectionEntry } from 'astro:content';

export type PublicationKind = 'journal' | 'conference' | 'preprint';

export type PublicationEntry =
    | CollectionEntry<'journal_publications'>
    | CollectionEntry<'conference_publications'>
    | CollectionEntry<'preprints'>;

export interface Publication {
    id: string;
    kind: PublicationKind;
    venue: string;
    status?: string;
    entry: PublicationEntry;
}

// Matches every spelling of my name used in the author lists
const OWN_NAME = /^Miguel Antunes/;

export const isOwnName = (author: string) => OWN_NAME.test(author);

export const publicationUrl = (id: string) => `/publications/${id}`;

const byDateDesc = (a: Publication, b: Publication) =>
    b.entry.data.date.getTime() - a.entry.data.date.getTime();

export async function getPublications(): Promise<Publication[]> {
    const journals = (await getCollection('journal_publications')).map((entry): Publication => ({
        id: entry.id, kind: 'journal', venue: entry.data.journal, entry,
    }));
    const conferences = (await getCollection('conference_publications')).map((entry): Publication => ({
        id: entry.id, kind: 'conference', venue: entry.data.conference, entry,
    }));
    const preprints = (await getCollection('preprints')).map((entry): Publication => ({
        id: entry.id, kind: 'preprint', venue: entry.data.venue, status: entry.data.status, entry,
    }));
    return [...journals, ...conferences, ...preprints].sort(byDateDesc);
}
