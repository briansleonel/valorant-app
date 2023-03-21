export interface IGamemodeApi {
    uuid: string;
    displayName: string;
    duration: string;
    allowsMatchTimeouts: boolean;
    isTeamVoiceAllowed: boolean;
    isMinimapHidden: boolean;
    orbCount: number;
    roundsPerHalf: number;
    teamRoles: Array<string>;
    gameFeatureOverrides: GameFeatureOverrides | null;
    gameRuleBoolOverrides: GameRuleBoolOverrides | null;
    displayIcon: string;
    assetPath: string;
}

interface GameFeatureOverrides {
    featureName: string;
    state: boolean;
}

interface GameRuleBoolOverrides {
    ruleName: string;
    state: boolean;
}
