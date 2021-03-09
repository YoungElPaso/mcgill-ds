// Import Twig to be able to render the template.
import Twig from "twig";

// Import the twig template.
import footer from "./footer.twig";

// Import the drupal Twig filters.
import drupal from "twig-drupal-filters";
drupal(Twig);

// Clear Twig cache - required so StoryBook can live-reload template.
// See: https://github.com/twigjs/twig.js/issues/414#issuecomment-287342662
Twig.cache();

export default {
  title: "WIP/Footer",
  parameters: {
    // To disable docs page content:
    // docs: { page: null }
    backgrounds: {
      default: "dark",
      grid: {
        // TW uses a 4pt base, but we just want 8pt resolution to the grid!
        // TODO: generalize this setting for all stories and add grid settings
        // to a x-library config file.
        cellSize: 8,
        opacity: 0.5,
        cellAmount: 1,
        offsetX: 8, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        offsetY: 8 // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      }
    }
  },
  argTypes: {
    _defaultClass: {
      description: "The default class applied to the footer.",
      control: { disable: true },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "mds-footer" }
      }
    }
  }
};

// Function to render the template.
const Template = ({ ...args }) => {
  // Returns footer template with arguments passed to it.
  return footer({ ...args });
};

// TODO: evaluate do we need a DarkTemplate for footer? Doubt it...
// Replace with Theme Add-on.

// Default Footer.
export const DefaultAndLegacyFooter = Template.bind({});
DefaultAndLegacyFooter.args = {
  // label: "Default Footer"
};
// TODO: this style is deprecated, check the SB docs and change it.
DefaultAndLegacyFooter.story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true }
  }
};
