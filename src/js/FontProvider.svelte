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


<style>
  /* Import some CSS from mds. */
    /* TODO: Import Sass instead ? Will Parcel compile this right? I doub it... 
    Correct, this doesn't work. Probably need a pre-process plugin and then I fully expect it would.*/
  @import "../../dist/css/components/headers.css";
  /* Component specific override */
  .h2-sans {
    color:red;
  }

</style>