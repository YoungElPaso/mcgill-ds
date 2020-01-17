<script>
  // Use the FontProvider as sub-component to build up a PageHeader component.
  import FontProvider from './FontProvider.svelte';

  // Use the Logo as a sub-component.
  import Logo from './Logo.svelte';

  // Export the pageHeadLine property.
  export let pageHeadLine = 'Page Headline';

  // Export the logoSize propery.
  export let logoSize;
</script>

<div class="page-header">
<!--This uses FontProvider to style the header).-->
  <FontProvider>
    <a href="/" title="Home Link">
      <Logo size="{logoSize}" />
      <h1>{pageHeadLine}</h1>
    </a>
    <h3>Page blurb</h3>
  </FontProvider>
</div>


<style>
  .page-header {
    border: 1px solid white;
    padding: 0 1em;
    background: #555;
  }
  /* Overrides some styles from default Headers CSS component. */
  h1 {
    color: white;
  }
  /* Overrides some styles from default Headers CSS component. */
  h3 {
    font-size: smaller;
    color: #1f1f1f;
  }
  p {
    font-size: small;
  }
</style>