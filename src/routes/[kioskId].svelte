<script context="module">
  import model from "$lib/models/kiosk";

  export async function preload(page) {
    const { props } = await model({ fetch: this.fetch, page });
    return props;
  }
</script>

<script>
  import Cookies from "js-cookie";
  import { AddToQueueForm, Closed, Header, InQueue } from "$components";

  export let state;
  export let products;
  export let text;
  export let settingsForPostData;

  if (state.open) {
    const cookieData = Cookies.get("currentCustomer");
    if (cookieData) {
      state = JSON.parse(cookieData);
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
  <h1>{text.welcomeScreen.header}</h1>
  <AddToQueueForm bind:state {products} {settingsForPostData} {text} />
{/if}

{#if state.inQueue}
  <InQueue {...state} {...text.confirmationScreen} />
{/if}
