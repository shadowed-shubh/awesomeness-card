<script lang="ts">
  import { getPerson } from './people';
  export let params: { id: string };
  $: person = getPerson(params.id);
</script>

{#if person}
<div class="page" style="background:{person.theme.bg}; color:{person.theme.text};">
{#if person.spotify}
  <div class="music">
    <iframe
      title="{person.name}'s song"
      src={person.spotify}
      height="152"
      frameBorder="0"
      allow="autoplay; encrypted-media"
    ></iframe>
  </div>
{/if}
  <div class="top">
    <div class="photo-col">
      <img class="photo" src={person.photo} alt={person.name} />
      <p class="nickname">{person.nickname}</p>
    </div> 
    <div class="name-col">
    <h1 style="color:{person.theme.accent};">{person.name}</h1>
    <h2 style="color:{person.theme.accent};">{person.dob}</h2>
  </div>
  </div>

  <div class="paragraph">
    {person.message}
  </div>
  <div class="graph">
  </div>
</div>
<img class="disc" src="/cd.png" alt="" />
{:else}
  <p>No card found for "{params.id}"</p>
{/if}

<style>
  .page {
    width: 100%;
    min-height: 100vh;
    padding: 1.5rem;
    box-sizing: border-box;
  }

  .top {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    z-index: 2;
  }

  .photo-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .nickname {
    margin: 0;
    font-weight: 600;
    opacity: 0.8;
    font-size: 3rem;
    text-align: center;
  }

  .photo {
  width: clamp(7rem, 18vw, 15rem);
  height: clamp(7rem, 18vw, 15rem);
  object-fit: cover;
  border-radius: 0.75rem;
  }
  .name-col {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  .top h1 {
  margin: 0;
  font-size: clamp(2.25rem, 12vw, 7.5rem);
  line-height: 1.15;
  flex: 1;
  min-width: 0;
  overflow-wrap: break-word;
  z-index: 2;
  }

  .top h2 {
  margin: 0;
  margin-top: 1.5rem;
  font-size: clamp(1rem, 3vw, 1.75rem);
  opacity: 0.85;
  }
.paragraph {
  margin-top: 1.5rem;
  line-height: 1.6;
  margin-left: 0rem;
  font-size: 1rem;
  margin-right: 0rem;

  position: relative;
  z-index: 4;
}
.disc {
  position: fixed;
  top: -14rem;
  right: -14rem;
  width: 28rem;
  height: 28rem;
  z-index: 0;
  pointer-events: none;  
  animation: spin 25s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.music {
  position: relative;
  z-index: 5;
  margin-bottom: 2rem;
  margin-top: -0.5rem;
}
.music iframe {
  width: 100%;
  border: none;
}


@media (min-width: 768px) {
  .paragraph {
    font-size: 1.5rem;
    margin-left: 17rem;
    margin-right: 12rem;
  }

  .disc {
    top: -25rem;
    right: -25rem;
    width: 50rem;
    height: 50rem;
  }
    .music {
    position: relative;
    max-width: 100%;
    top: 0;
  }
}
</style>
