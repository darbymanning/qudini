<script context="module">
  import model from "$lib/models/kiosk";

  export async function preload(page) {
    const { props } = await model({ fetch: this.fetch, page });
    return props;
  }
</script>

<script>
  import { cookies } from "$lib/utils";
  import { AddToQueueForm, Closed, Header, InQueue } from "$components";

  export let state;
  export let products;
  export let text;
  export let settingsForPostData;

  if (state.open) {
    const currentCustomer = cookies.getCurrentCustomer();

    if (currentCustomer) {
      state = currentCustomer;
    }
  }
</script>

<svelte:head>
  <title>Qudini</title>
</svelte:head>

<Header />

{#if state.closed}
  <Closed {...text.closeScreen} />
{/if}

{#if state.open}
  <h1 class="header u-h1">{text.welcomeScreen.header}</h1>
  <AddToQueueForm bind:state {products} {settingsForPostData} {text} />
{/if}

{#if state.inQueue}
  <InQueue {...state} {...text.confirmationScreen} />
{/if}

<style lang="scss">
  .header {
    max-width: 15ch;
  }
</style>
