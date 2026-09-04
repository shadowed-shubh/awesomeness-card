<script lang="ts">
  import Router from 'svelte-spa-router';
  import Profile from './lib/Profile.svelte';
  import Home from './lib/Home.svelte';

  const routes = {
    '/': Home,
    '/profile/:id': Profile
  };
</script>

<Router {routes} />
