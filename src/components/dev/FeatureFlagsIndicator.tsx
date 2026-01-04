"use client";

import { getEnabledFeatureFlags } from "@/lib/featureFlags";

export function FeatureFlagsIndicator() {
    if (process.env.NODE_ENV === 'production') {
        return null;
    }

    const enabledFlags = getEnabledFeatureFlags();

    if (enabledFlags.length === 0) {
        return null;
    }

    return (
        <div className="fixed bottom-2 left-2 z-50 px-3 py-2 bg-black/70 text-xs text-white/80 rounded font-mono backdrop-blur-sm">
            <div className="font-semibold mb-1">Feature Flags:</div>
            <ul className="list-disc list-inside">
                {enabledFlags.map(flag => (
                    <li key={flag} className="text-green-400">{flag}</li>
                ))}
            </ul>
        </div>
    );
}