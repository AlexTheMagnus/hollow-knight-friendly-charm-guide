export type Charm = {
    id: string;
    description: string;
    location: string;
    name: string;
    notches: number;
    sprite: string;
    video_url: string;
};

export function charmsMapper(data: unknown): Charm[] {
    if (!Array.isArray(data)) return [];
    return data.filter(
        (item): item is Charm =>
            item &&
            typeof item.id === "string" &&
            typeof item.name === "string" &&
            typeof item.description === "string" &&
            typeof item.location === "string" &&
            typeof item.notches === "number" &&
            typeof item.sprite === "string" &&
            typeof item.video_url === "string"
    );
}
