<script>
  import { getCustomerDetails } from "$lib/services/kiosk";
  import getPositionResolver from "$lib/resolvers/getPosition";

  export let header;
  export let top;
  export let bottom;
  export let customerId;
  export let position;
  export let firstName;

  let interval = setInterval(getPosition, 3000);

  async function getPosition() {
    const req = await getCustomerDetails(customerId);
    position = getPositionResolver(req);

    if (!position) {
      clearInterval(interval);
    }
  }
</script>

{#if position}
  <h1>{header.text.withMobile} {firstName}</h1>
  <p>{top.text.withMobile}</p>
  <strong class="position">{position}</strong>
  <p>{bottom.text.withMobile}</p>
{:else}
  <h1>Thank you for waiting {firstName}</h1>
  <p>
    We're ready for you now. Please make your way to the meeting point for your
    child's room.
  </p>
{/if}

<style lang="scss">
  .position {
    font-size: 2em;
    width: 2em;
    height: 2em;
    display: inline-flex;
    border-radius: 50%;
    border: 0.2rem solid;
    justify-content: center;
    align-items: center;
  }
</style>
