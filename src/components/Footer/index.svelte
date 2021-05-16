<script>
  export let alt;
  export let src;
</script>

<footer>
  <img {alt} {src} />
</footer>

<style lang="scss">
  footer {
    margin-top: 3rem;
  }

  img {
    width: 15rem;
  }
</style>
