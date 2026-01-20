export enum FeatureFlag {
    LanguageSelector = 'languageSelector',
    SettingsMenu = 'settingsMenu'
}

export const PRODUCTION_FLAGS: FeatureFlag[] = [];

export const DEVELOPMENT_FLAGS: FeatureFlag[] = [
    FeatureFlag.LanguageSelector,
    FeatureFlag.SettingsMenu,
];

export function getEnabledFeatureFlags(): FeatureFlag[] {
    const isDevelopment = process.env.NODE_ENV === 'development';

    return isDevelopment ? DEVELOPMENT_FLAGS : PRODUCTION_FLAGS;
}

export function isFeatureEnabled(flag: FeatureFlag): boolean {
    const enabledFlags = getEnabledFeatureFlags();
    return enabledFlags.includes(flag);
}

export function useFeatureFlag(flag: FeatureFlag): boolean {
    return isFeatureEnabled(flag);
}