export interface Album {
    id: string;
    name: string;
    coverImage: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
    imageCount: number;
} 