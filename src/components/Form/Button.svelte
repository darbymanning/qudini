<script>
  export let disabled;
</script>

<button type="submit" {disabled}><slot /></button>

<style lang="scss">
  button {
    appearance: none;
    background: var(--black);
    border: 0.1rem solid;
    color: var(--white);
    height: var(--form-height);
    justify-self: stretch;
  }

  [disabled] {
    background: var(--grey-1);
    border-color: var(--grey-2);
    color: var(--grey-3);
    cursor: not-allowed;
  }
</style>
