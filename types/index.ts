export interface Project {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    year: string;
    imageUrl: string;
    galleryImages?: string[];
    description: string;
    technicalData?: string;
    conceptNote?: string;
    location?: string;
}

export interface NarrativePart {
    text: string;
    placement: 'top' | 'middle' | 'bottom';
}

export interface StoryResponse {
    fragments: NarrativePart[];
    mood: string;
    accentColor: string;
}
