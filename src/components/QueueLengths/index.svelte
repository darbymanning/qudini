<script>
  import { getData } from "$lib/services/kiosk";
  import getQueueLengthsResolver from "$lib/resolvers/getQueueLengths";

  export let queueLengths = {};
  export let kioskId;
  export let products;
  export let productId;

  setInterval(getQueueLengths, 5000);

  async function getQueueLengths() {
    if (!process.browser) return;
    const res = await getData(window.fetch, kioskId);
    queueLengths = getQueueLengthsResolver(products, res);
  }
</script>

<div>
  <span>
    {#if productId}
      People in queue:
      <strong>{queueLengths[productId].length}</strong>
    {:else}
      People in queue:
      {#each products as product, i}
        {i > 0 ? " / " : ""}
        {product.name}:
        <strong>{queueLengths[product.id].length}</strong>
      {/each}
    {/if}
  </span>
</div>

<style lang="scss">
  div {
    align-items: center;
    background: #eaeaea;
    display: flex;
    font-size: 1.2rem;
    height: 3rem;
    justify-content: center;
    margin-bottom: 2rem;
    width: clamp(25rem, 80vw, 50rem);
  }
</style>
