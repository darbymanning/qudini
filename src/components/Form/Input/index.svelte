<script>
  export let pattern = null;
  export let name = "";
  export let required = false;
  export let value = "";
</script>

<label class="input-item" for={name}>
  <span class="u-signPost">
    <slot />
  </span>
  <div class="input-wrapper">
    <input
      bind:value
      class="input-el"
      data-testid="input"
      id={name}
      {pattern}
      {name}
      {required}
      type="text"
    />
  </div>
</label>
