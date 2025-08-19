export type Charm = {
    description: string;
    location: string;
    name: string;
    notches: number;
    sprite: string;
};

export function charmsMapper(data: unknown): Charm[] {
    if (!Array.isArray(data)) return [];
    return data.filter(
        (item): item is Charm =>
            item &&
            typeof item.name === "string" &&
            typeof item.description === "string" &&
            typeof item.location === "string" &&
            typeof item.notches === "number" &&
            typeof item.sprite === "string"
    );
}
