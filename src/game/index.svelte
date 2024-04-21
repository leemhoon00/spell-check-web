<script lang="ts">
  import { onMount } from 'svelte';
  import { io } from 'socket.io-client';
  import { API_URL } from '@src/config';
  import type { Player } from './types';
  import PlayerComponent from './Player.svelte';
  
  export let params = {matchId: ''};

  let players: Player[] = [];

  onMount(() => {
    const socket = io(API_URL+'/'+params.matchId);
    socket.on('connect', () => {
      console.log('connected');
    });
    socket.on('match', (data) => {
      players = data.players;
      console.log(players);
    })
  });
</script>

<div class="container">
  {#each players as player}
    <PlayerComponent {player} />
  {/each}
</div>