<script context="module">
  import model from "$lib/models/kiosk";
  export const load = model;
</script>

<script>
  import Cookies from "js-cookie";
  import Closed from "$components/Closed.svelte";
  import AddToQueueForm from "$components/AddToQueueForm.svelte";
  import InQueue from "$components/InQueue.svelte";

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
