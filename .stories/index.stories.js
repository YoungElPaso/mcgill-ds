// Story for PageHeader component.
import PageHeader from '../src/js/PageHeader.svelte';
// Story for Logo component.
import Logo from '../src/js/Logo.svelte';

// Story definitions.
export default { title: 'Page Header' };


export const withHeadlineAndDefaultLargeLogo = () => ({
  "use strict";
  Component: PageHeader,
  props: {
    pageHeadLine: 'This is a headline!',
    // logoSize: // Default is 'large', handled in component.
  },
});

export const withHeadlineAndMediumLogo = () => ({
  "use strict";
  Component: PageHeader,
  props: {
    pageHeadLine: 'This is a headline.',
    logoSize: 'medium' // Default is 'large'.
  },
});

export const withHeadlineAndSmallLogo = () => ({
  "use strict";
  Component: PageHeader,
  props: {
    pageHeadLine: 'This is a headline.',
    logoSize: 'small' // Default is 'large'.
  },
});

export const LargeLogo = () => ({
  "use strict";
  Component: Logo,
  props: {
    // pageHeadLine: 'This is a headline!',
    // logoSize: // Default is 'large', handled in component.
  },
});
