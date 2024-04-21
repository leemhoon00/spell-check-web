export type Player = {
  champion: {
    code: number;
    name: string;
  };
  ionianBoost: boolean;
  runeBoost: boolean;
  spell1: {
    code: number;
    name: string;
    cooldown: number;
  };
  spell2: {
    code: number;
    name: string;
    cooldown: number;
  };
};
