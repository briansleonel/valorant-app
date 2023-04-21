export interface IAgentApi {
    uuid: string;
    displayName: string;
    description: string;
    developerName: string;
    characterTags: null;
    displayIcon: string;
    displayIconSmall: string;
    bustPortrait: string;
    fullPortrait: string;
    fullPortraitV2: string;
    killfeedPortrait: string;
    background: string;
    backgroundGradientColors: Array<string>;
    assetPath: string;
    isFullPortraitRightFacing: boolean;
    isPlayableCharacter: boolean;
    isAvailableForTest: boolean;
    isBaseContent: boolean;
    role: Role;
    abilities: Array<Abilities>;
    voiceLine: VoiceLineApi;
}

interface Abilities {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
}

interface Role {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
}

interface MediaListApi {
    id: number;
    wwise: string;
    wave: string;
}

interface VoiceLineApi {
    minDuration: number;
    maxDuration: number;
    mediaList: Array<MediaListApi>;
}

export type AgentsAction =
    | {
          type: "agents/getAll";
          payload: {
              agents: Array<IAgentApi>;
          };
      }
    | {
          type: "agents/getByID";
          payload: {
              uuid: string;
          };
      };
