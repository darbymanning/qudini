<script>
  export let pattern = "[0-9]{10,15}",
    name = "",
    required = false,
    value = "";
</script>

<label class="input-item" for={name}>
  <span class="u-signPost">
    <slot />
  </span>
  <div class="input-wrapper">
    <input
      bind:value
      class="input-el"
      data-testid="tel"
      id={name}
      {name}
      {pattern}
      {required}
      type="tel"
    />
  </div>
</label>
