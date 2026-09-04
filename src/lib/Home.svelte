<script lang="ts">
  import { people } from './people';
</script>

{#each people as p}
  <a href="#/profile/{p.id}">{p.name}</a>
{/each}
