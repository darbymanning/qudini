<script context="module">
  import model from "$lib/models/kiosk";

  export async function preload(page) {
    const { props } = await model({ fetch: this.fetch, page });
    return props;
  }
</script>

<script>
  import { cookies } from "$lib/utils";
  import {
    AddToQueueForm,
    Closed,
    Header,
    InQueue,
    JoinQueueAgain,
  } from "$components";

  export let kioskId;
  export let products;
  export let state;
  export let settingsForPostData;
  export let text;
  export let showJoinAgain = cookies.getHasCheckedIn();

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
  {#if showJoinAgain}
    <JoinQueueAgain bind:state {kioskId} bind:showJoinAgain />
  {:else}
    <h1 class="header u-h1">{text.welcomeScreen.header}</h1>
    <AddToQueueForm
      bind:state
      {products}
      {settingsForPostData}
      {text}
      bind:showJoinAgain
    />
  {/if}
{/if}

{#if state.inQueue}
  <InQueue bind:state {...state} {...text.confirmationScreen} {kioskId} />
{/if}

<style lang="scss">
  .header {
    max-width: 15ch;
  }
</style>
