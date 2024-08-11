<script lang="ts">
  export let onClick = () => {};
</script>

<button on:click={onClick}><slot /></button>

<style>
  button {
    padding: 8px 16px;
    background-color: var(--lilac);
    color: #000;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: var(--lilac-light);
  }
</style>
