<script lang="ts">
  import { slide } from "svelte/transition";
  type MenuItem = {
    label: string;
    url: string;
  };
  export let open = false;
  export let onClickMenuItem: (item: MenuItem) => void = () => {};
  export let sideMenuItems: MenuItem[] = [];
</script>

{#if open}
  <ul
    class="side-menu"
    transition:slide={{
      duration: 300,
      axis: "x",
    }}
  >
    {#each sideMenuItems as item}
      <a
        href={item.url}
        class="side-menu-item"
        on:click={() => onClickMenuItem(item)}>{item.label}</a
      >
    {/each}
  </ul>
{/if}

<style>
  .side-menu {
    background-color: var(--lilac);
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 100vh;
    width: max(160px, 15vw);
    overflow-y: auto;
  }

  .side-menu-item {
    color: black;
    text-decoration: none;
    display: block;
    padding: 10px;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: clip;
  }

  .side-menu-item:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
</style>
