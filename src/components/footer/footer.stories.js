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
      grid: {
        cellSize: 4,
        opacity: 0.5,
        cellAmount: 4,
        offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        offsetY: 16 // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
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
  // Returns button template with arguments passed to it.
  return footer({ ...args });
};

// TODO: evaluate do we need a DarkTemplate for footer? Doubt it...
// Function to render the template with an artificial contrasty background.
// Uses the '.dark' theme class to toggle.
// const DarkTemplate = ({ ...args }) => {
//   // You can either use a function to create DOM elements or use a plain html string!
//   // return `<div>${label}</div>`;
//   return `
//   <div class="dark" style="padding: 2em; background: #333;">
//     <p style="color: white"> A dark context to illustrate themeing.</p>
//     ${footer({ ...args })}
//   </div>`;
// };

// Default Footer.
export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  label: "Default Footer"
};
DefaultFooter.story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true }
  }
};

// Default in dark theme.
// export const DefaultOnDark = DarkTemplate.bind({});
// DefaultOnDark.args = {
//   label: "Default Footer"
// };
