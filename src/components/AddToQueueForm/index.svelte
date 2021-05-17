<script>
  import { onMount } from "svelte";
  import { Button, Input, Radio, Tel } from "$components/Form";
  import { addToQueue } from "$lib/services/kiosk";
  import postQueueDataResolver from "$lib/resolvers/postQueueData";
  import postQueueResponseResolver from "$lib/resolvers/postQueueResponse";
  import { cookies } from "$lib/utils";

  export let products;
  export let text;
  export let settingsForPostData;
  export let state;
  export let isValid = false;
  export let showJoinAgain;
  export let formData = cookies.getFormDataFromCookies();

  let form;

  $: cookies.setFormData(formData);

  async function handleSubmit() {
    const data = postQueueDataResolver(formData, products, settingsForPostData);
    const res = await addToQueue(data);
    const resolvedQueueData = postQueueResponseResolver(res);

    cookies.setPostQueueData(data);
    cookies.setCurrentCustomer(resolvedQueueData);
    cookies.setHasCheckedIn(true);
    showJoinAgain = true;
    state = postQueueResponseResolver(res);
  }

  function checkValidity() {
    isValid = form.checkValidity();
  }

  function handleInput() {
    checkValidity();
  }

  onMount(checkValidity);
</script>

<form
  on:submit|preventDefault={handleSubmit}
  on:input={handleInput}
  bind:this={form}
>
  <fieldset>
    <h2 class="u-signPost">{text.addToQueueForm.header}</h2>
    {#each products as { name, id }}
      <Radio bind:group={formData.productId} name="product" value={id}>
        {name}
      </Radio>
    {/each}
  </fieldset>

  <Input name="name" required bind:value={formData.name}>
    {text.addToQueueForm.name}
  </Input>

  <Input name="orderNumber" required bind:value={formData.orderNumber}>
    {text.addToQueueForm.orderNumber}
  </Input>

  <Tel required bind:value={formData.mobileNumber}>
    {text.addToQueueForm.mobileNumber}
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
