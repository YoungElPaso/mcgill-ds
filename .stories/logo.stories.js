// Story for PageHeader component.
// import PageHeader from '../src/js/PageHeader.svelte';
// Story for Logo component.
import Logo from '../src/js/Logo.svelte';

// Story definitions.
export default { title: 'Logo' }

export const LargeLogo = () => ({
  Component: Logo,
  props: {
    // pageHeadLine: 'This is a headline!',
    // logoSize: // Default is 'large', handled in component.
  },
});