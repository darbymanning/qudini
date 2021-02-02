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
      class="input-el"
      {pattern}
      {required}
      type="tel"
      id={name}
      bind:value
      {name}
    />
  </div>
</label>
