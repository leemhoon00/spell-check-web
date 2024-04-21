<script lang="ts">
  import type { Player } from './types';
  import { version } from '@src/stores';
  export let player: Player;
</script>

<div>
  <img
    src="https://ddragon.leagueoflegends.com/cdn/{$version}/img/champion/{player
      .champion.name}.png"
    alt=""
  />
  <button>
    <img
      src="https://ddragon.leagueoflegends.com/cdn/{$version}/img/spell/{player
        .spell1.name}.png"
      alt=""
    />
  </button>
  <button>
    <img
      src="https://ddragon.leagueoflegends.com/cdn/{$version}/img/spell/{player
        .spell2.name}.png"
      alt=""
    />
  </button>

  <button>
    <img
      src="https://ddragon.leagueoflegends.com/cdn/{$version}/img/item/223158.png"
      alt=""
    />
  </button>

  {#if player.runeBoost}
    <img
      src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
      alt=""
    />
  {/if}
</div>

<style>
  div {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  img {
    margin: 0.5rem;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
</style>
