<script>
  export let disabled;
</script>

<button type="submit" {disabled}><slot /></button>

<style lang="scss">
  button {
    appearance: none;
    border: 0.1rem solid;
    justify-self: stretch;
    height: var(--form-height);
    background: var(--black);
    color: var(--white);
  }

  [disabled] {
    background: var(--grey-1);
    color: var(--grey-3);
    border-color: var(--grey-2);
    cursor: not-allowed;
  }
</style>
