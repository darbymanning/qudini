<script>
  export let pattern = null,
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
      class="input-el"
      {pattern}
      {required}
      type="text"
      id={name}
      bind:value
      {name}
    />
  </div>
</label>
