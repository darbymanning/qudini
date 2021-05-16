<script>
  import { getCustomerDetails } from "$lib/services/kiosk";
  import getPositionResolver from "$lib/resolvers/getPosition";
  import currentCustomerResolver from "$lib/resolvers/currentCustomer";
  import stateResolver from "$lib/resolvers/state";
  import { cookies } from "$lib/utils";
  import { getData } from "$lib/services/kiosk";
  import { Button } from "$components/Form";

  export let inQueue;
  export let customerId;
  export let position;
  export let firstName;
  export let state;
  export let kioskId;
  export let readyTimestamp = null;

  let interval = setInterval(getPosition, 3000);

  async function getPosition() {
    const res = await getCustomerDetails(customerId);
    position = getPositionResolver(res);

    const resolvedCurrentCustomer = currentCustomerResolver(res);
    cookies.setCurrentCustomer(resolvedCurrentCustomer);

    if (!position) {
      clearInterval(interval);
      readyTimestamp = new Date();
    }
  }

  async function handleFocus() {
    if (position) return;

    const diff = new Date() - readyTimestamp;
    const minutesSinceCheckIn = Math.floor(diff / 1000 / 60);

    if (minutesSinceCheckIn >= 5) await resetState();
  }

  async function resetState() {
    const kioskData = await getData(window.fetch, kioskId);
    state = stateResolver(kioskData);
  }
</script>

<svelte:window on:focus={handleFocus} />

{#if position}
  <h1 class="u-h1">{inQueue.header} {firstName}</h1>
  <p>{inQueue.currentPosition}</p>
  <strong class="position" data-testid="position">{position}</strong>
  <p>{inQueue.weWillContactYou}</p>
{:else}
  <h1 class="u-h1">Thank you for waiting {firstName}</h1>
  <p>
    We're ready for you now. Please make your way to the meeting point for your
    child's room.
  </p>
  <Button type="button" on:click={resetState}>Back to check-in</Button>
{/if}

<style lang="scss">
  .position {
    align-items: center;
    border: 0.2rem solid;
    border-radius: 50%;
    display: inline-flex;
    font-size: 2em;
    height: 2em;
    justify-content: center;
    width: 2em;
  }
</style>
