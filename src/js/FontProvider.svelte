<script>
  export let greeting = 'FontProvider component';
  export let description = false;
</script>

  {#if description}
    <h2>
      {greeting}
    </h2>
    <p>
      Extra font styles provided in this component!
    </p>
    <p>
      The next text should be big like an h2 header, but red and sans-serif.
    </p>
  {/if}

  <div class="h2-sans">
    <slot><strong>Hi! I'm big like an H2 but with McGill-Sans instead of Serif.</strong></slot>
  </div>


<style lang="scss">

  /* Import headers components from Sass. */
  @import "../sass/components/headers.scss";
  // TODO: really this should import fonts module and go from there, not use headers. Ideally, use sass/components/fontprovider.scss

  /* Component specific override */
  // .h2-sans {
  //   color:red;
  // }

</style>