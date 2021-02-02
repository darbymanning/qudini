<script>
  export let group = "";
  export let name;
  export let value;
</script>

<label class="radio-item" for={value}>
  <input
    bind:group
    class="radio-el u-screenReaderOnly"
    id={value}
    {value}
    {name}
    type="radio"
  />
  <span aria-hidden="true" class="radio-icon" />
  <slot />
</label>

<style lang="scss">
  .radio-item {
    --radio-color: var(--grey-3);

    display: flex;
    cursor: pointer;

    :global(+ #{&}) {
      margin-top: 1em;
    }
  }

  .radio-icon {
    display: flex;
    border: 1px solid var(--radio-color);
    border-radius: 50%;
    width: 1em;
    height: 1em;
    transition: border-color 0.15s ease;
    margin-right: 0.5em;

    &::after {
      content: "";
      display: block;
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      background: var(--radio-color);
      transition: transform 0.15s ease;
    }
  }

  .radio-el:not([disabled]):checked + .radio-icon {
    --radio-color: var(--black);

    &::after {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  .radio-el:focus-visible + .radio-icon {
    box-shadow: 0 0 0 0.2rem var(--white), 0 0 0 0.4rem var(--black);
  }
</style>
