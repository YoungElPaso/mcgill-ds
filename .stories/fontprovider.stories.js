// Story for FontProvider component.
// import FontProvider from '../src/js/FontProvider.svelte';
// Story for Logo component.
import FontProvider from '../src/js/FontProvider.svelte';

// Story definitions.
export default { title: 'FontProvider' }

export const DefaultFontProvider = () => ({
  Component: FontProvider,
  props: {
    // pageHeadLine: 'This is a headline!',
    // logoSize: // Default is 'large', handled in component.
  },
});