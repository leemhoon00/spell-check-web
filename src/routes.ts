import Home from './home/index.svelte';
import Game from './game/index.svelte';

export const routes = {
  '/': Home,
  '/:matchId': Game,
};
