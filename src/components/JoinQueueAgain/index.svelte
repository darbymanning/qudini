<script>
  import { Button } from "$components/Form";
  import { addToQueue } from "$lib/services/kiosk";
  import postQueueResponseResolver from "$lib/resolvers/postQueueResponse";
  import stateResolver from "$lib/resolvers/state";
  import { cookies } from "$lib/utils";
  import { getData } from "$lib/services/kiosk";

  export let state;
  export let kioskId;
  export let showJoinAgain;

  const formData = cookies.getFormDataFromCookies();
  const postQueueData = cookies.getPostQueueData();
  const firstName = formData.name.split(" ")[0];
  const text = `are you here to pick-up/drop-off ${formData.orderNumber}?`;

  async function submitDetails() {
    const res = await addToQueue(postQueueData);
    state = postQueueResponseResolver(res);
  }

  async function resetState() {
    if (!process.browser) return;
    cookies.removeHasCheckedIn();
    showJoinAgain = false;
    const kioskData = await getData(window.fetch, kioskId);
    state = stateResolver(kioskData);
  }
</script>

<p class="u-h2">
  Hey {firstName},
  <span class="u-h3" style="--length: {text.length}ch">{text}</span>
</p>

<nav>
  <Button on:click={submitDetails}>Yes, add me to the queue</Button>
  <button type="reset" on:click={resetState} data-testid="cancel">Nope</button>
</nav>

<style lang="scss">
  span {
    display: block;
    margin-top: 0.5em;
    max-width: calc(var(--length) / 2);
  }

  nav {
    display: grid;
    gap: 0.5em;
  }
</style>
