<script lang="ts">
  import { onMount } from 'svelte';
  import { version } from './stores';
  import Router from 'svelte-spa-router';
  import { routes } from './routes';

  import { getVersion } from './api';
  onMount(async () => {
    const data = await getVersion();
    version.set(data);
  });
</script>

<Router {routes} />
