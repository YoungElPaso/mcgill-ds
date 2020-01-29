// Story for PageHeader component.
import PageHeader from '../src/js/PageHeader.svelte';
// Story for Logo component.
import Logo from '../src/js/Logo.svelte';

// Story definitions.
export default { title: 'Page Header' }


export const withHeadlineAndDefaultLargeLogo = () => ({
  Component: PageHeader,
  props: {
    pageHeadLine: 'This is a headline!',
    // logoSize: // Default is 'large', handled in component.
  },
});

export const withHeadlineAndMediumLogo = () => ({
  Component: PageHeader,
  props: {
    pageHeadLine: 'This is a headline.',
    logoSize: 'medium' // Default is 'large'.
  },
});

export const withHeadlineAndSmallLogo = () => ({
  Component: PageHeader,
  props: {
    pageHeadLine: 'This is a headline.',
    logoSize: 'small' // Default is 'large'.
  },
});

export const LargeLogo = () => ({
  Component: Logo,
  props: {
    // pageHeadLine: 'This is a headline!',
    // logoSize: // Default is 'large', handled in component.
  },
});