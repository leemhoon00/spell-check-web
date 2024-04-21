<script lang="ts">
  import { onMount } from 'svelte';
  import { io } from 'socket.io-client';
  import { API_URL } from '@src/config';
  import type { Player } from './types';
  import PlayerComponent from './Player.svelte';

  export let params = { matchId: '' };

  let players: Player[] = [];

  onMount(() => {
    const socket = io(API_URL + '/' + params.matchId);
    socket.on('connect', () => {
      console.log('connected');
    });
    socket.on('match', (data) => {
      players = data.players;
      console.log(players);
    });
  });
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8">
      {#each players as player}
        <PlayerComponent {player} />
      {/each}
    </div>
    <div class="col-2"></div>
  </div>
</div>

<style>
  .container-fluid {
    height: 100%;
    padding: 5% 0;
  }
  .row {
    height: 100%;
  }
</style>
