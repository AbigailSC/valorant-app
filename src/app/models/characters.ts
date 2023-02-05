export interface Characters {
  status: number;
  data: Character[];
}

export interface Character {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: unknown;
  displayIcon: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  role: CharacterRole;
  abilities: CharacterAbility[];
  voiceLine: string;
}

interface CharacterRole {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

interface CharacterAbility {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}
