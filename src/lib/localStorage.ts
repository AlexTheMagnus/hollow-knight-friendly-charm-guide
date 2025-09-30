const STORAGE_KEY = "hollow-knight-obtained-charms";

export class CharmsStorageService {
    /**
     * Get obtained charms from localStorage
     * @returns Array of charm IDs that are marked as obtained
     */
    static getObtainedCharms(): string[] {
        try {
            if (typeof window === "undefined") return [];

            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error(
                "Error reading obtained charms from localStorage:",
                error
            );
            return [];
        }
    }

    /**
     * Save obtained charms to localStorage
     * @param charmIds Array of charm IDs that are marked as obtained
     */
    static saveObtainedCharms(charmIds: string[]): void {
        try {
            if (typeof window === "undefined") return;

            localStorage.setItem(STORAGE_KEY, JSON.stringify(charmIds));
        } catch (error) {
            console.error(
                "Error saving obtained charms to localStorage:",
                error
            );
        }
    }

    /**
     * Add a charm to the obtained list
     * @param charmId ID of the charm to mark as obtained
     */
    static addObtainedCharm(charmId: string): void {
        const obtainedCharms = this.getObtainedCharms();
        if (!obtainedCharms.includes(charmId)) {
            obtainedCharms.push(charmId);
            this.saveObtainedCharms(obtainedCharms);
        }
    }

    /**
     * Remove a charm from the obtained list
     * @param charmId ID of the charm to unmark as obtained
     */
    static removeObtainedCharm(charmId: string): void {
        const obtainedCharms = this.getObtainedCharms();
        const filtered = obtainedCharms.filter((id) => id !== charmId);
        this.saveObtainedCharms(filtered);
    }

    /**
     * Check if a charm is marked as obtained
     * @param charmId ID of the charm to check
     * @returns true if the charm is marked as obtained
     */
    static isCharmObtained(charmId: string): boolean {
        const obtainedCharms = this.getObtainedCharms();
        return obtainedCharms.includes(charmId);
    }

    /**
     * Clear all obtained charms
     */
    static clearObtainedCharms(): void {
        try {
            if (typeof window === "undefined") return;

            localStorage.removeItem(STORAGE_KEY);
        } catch (error) {
            console.error(
                "Error clearing obtained charms from localStorage:",
                error
            );
        }
    }
}
