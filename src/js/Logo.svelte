<script>
  // A size variable for the logo. Available in small, medium, large.
  // Large is the default value.
  export let size = "large";

  // Import logo image in JS. Makes sense actually, since HTML in this component should be treated as is -ie. relative path to where the component is rendered, not where it lives in source!
  import logo from '../../src/sass/assets/mcgill-logo-red-reverse-XL-header.svg';
</script>

<!-- This uses a direct reference to a variable and Parcel does resolve the path right path, good! -->
<div class="logo {size}">
  <img class={size} src="{logo}" alt="McGill Logo" />
</div>


<style>
  .logo {
    float: left;
    background: red;
    padding: 1em;
    margin-right: 1em;
  }

  .small {
    width: 50px;
  }

  .medium {
    width: 100px;
  }

  .large {
    width: 200px;
  }
</style>
