<script>
  import { onMount } from "svelte";
  import Cookies from "js-cookie";
  import { Button, Input, Radio, Tel } from "$components/Form";
  import { addToQueue } from "$lib/services/kiosk";
  import postQueueDataResolver from "$lib/resolvers/postQueueData";
  import postQueueResponseResolver from "$lib/resolvers/postQueueResponse";

  export let products;
  export let text;
  export let settingsForPostData;
  export let state;

  const cookiesFormData = Cookies.get("formData");

  let form;
  let isValid;
  let formData = cookiesFormData ? JSON.parse(cookiesFormData) : {};

  $: Cookies.set("formData", formData);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = postQueueDataResolver(formData, products, settingsForPostData);
    const res = await addToQueue(data);
    const resolvedQueueData = postQueueResponseResolver(res);

    const in30Minutes = 1 / 48;

    Cookies.set("currentCustomer", resolvedQueueData, {
      expires: in30Minutes,
    });

    state = resolvedQueueData;
  }

  function checkValidity() {
    isValid = form.checkValidity();
  }

  function handleInput() {
    checkValidity();
  }

  onMount(checkValidity);
</script>

<form on:submit={handleSubmit} on:input={handleInput} bind:this={form}>
  <fieldset>
    <h2 class="u-signPost">{text.serviceScreen.header}</h2>
    {#each products as { name, id }}
      <Radio bind:group={formData.productId} name="product" value={id}>
        {name}
      </Radio>
    {/each}
  </fieldset>

  <Input name="name" required bind:value={formData.name}>
    {text.customerScreen.placeholder.name}
  </Input>

  <Input name="orderNumber" required bind:value={formData.orderNumber}>
    {text.customerScreen.placeholder.orderNumber}
  </Input>

  <Tel required bind:value={formData.mobileNumber}>
    {text.customerScreen.placeholder.mobileNumber}
  </Tel>

  <Button disabled={!isValid}>Join the queue</Button>
</form>

<style lang="scss">
  form {
    display: grid;
    gap: calc(var(--gutter) * 1.5);
    margin-bottom: var(--gutter);
    margin-top: var(--gutter);
    text-align: start;
    width: clamp(25rem, 80vw, 50rem);

    @media (min-width: 37.5em) {
      border: 0.1rem solid var(--grey-2);
      padding: var(--gutter);
    }
  }
</style>
