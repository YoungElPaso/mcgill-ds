// Import Twig to be able to render the template.
import Twig from "twig";

// Import the twig template.
import button from "./button.twig";

// import { withDsm } from "@invisionapp/dsm-storybook";

// If desired could also import a component specific JS file.
// E.g.
// import buttonjs from "./button.js";

// Clear Twig cache - required so StoryBook can live-reload template.
// See: https://github.com/twigjs/twig.js/issues/414#issuecomment-287342662
Twig.cache();

export default {
  title: "Twig Templates/Button",
  parameters: {
    // To disable docs page content:
    // docs: { page: null }
    "in-dsm": { id: "60428ccc05d5fe4ba072ca8a" }
  },
  argTypes: {
    label: {
      description: "The text inside the button.",
      control: "text",
      table: {
        type: { summary: "string" }
      }
    },
    _defaultClass: {
      description: "The default class applied to the button.",
      control: { disable: true },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "mds-button" }
      }
    },
    modifiers: {
      description: "Select a modifier (variant) class.",
      table: {
        type: { summary: "string" }
      },
      control: {
        type: "select",
        options: [
          "mds-button--secondary",
          "mds-button--square",
          "mds-button--large",
          "mds-button--branded"
        ]
      }
    },
    icon: {
      description: "Select an icon to include in the button.",
      defaultValue: null,
      control: {
        type: "select",
        options: [null, "search", "cloud-download-sharp", "heart-sharp"]
      },
      table: {
        type: { summary: "string" }
      }
    }
  }
};

// Function to render the template.
const Template = ({ ...args }) => {
  // Returns button template with arguments passed to it.
  return button({ ...args });
};

// Function to render the template with an artificial contrasty background.
// Uses the '.dark' theme class to toggle.
const DarkTemplate = ({ ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return `
  <!-- the following div is for illustrating the 'dark' theme only! -->
  <div class="dark" style="padding: 2em; background: #333;">
    <p style="color: white"> A dark context to illustrate themeing.</p>
    <!-- Start of Button component, copy this: -->
    ${button({ ...args })}
    <!-- End of Button component. -->
  </div>`;
};

// Using template literal instead of template.bind()
// DSM has existing issue with using template.bind and
// picking up "in-dsm" property.
export const PrimaryDSM = (args) => {
  return `
    <div>
      ${button({ ...args })}
    </div>
  `;
};
PrimaryDSM.args = {
  label: "DSM Primary",
  "in-dsm": { id: "60428ccc05d5fe4ba072ca8a" }
};

// Primarty Button, aka default.
export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button"
};

// Primary in dark theme.
export const PrimaryOnDark = DarkTemplate.bind({});
PrimaryOnDark.args = {
  label: "Primary Button"
};

// Primary with branding (aka red).
export const PrimaryBranded = Template.bind({});
PrimaryBranded.args = {
  label: "Primary Button",
  modifiers: "mds-button--branded"
};
// Disables the controls for a given story.
// see: https://stackoverflow.com/questions/59680328/hide-addon-per-story-in-storybook
PrimaryBranded.story = {
  parameters: {
    controls: { disable: true }
  }
};
// TODO: need to contiue here: https://support.invisionapp.com/hc/en-us/articles/360048142812 - adding these options and other DSM integration items.

// Secondary Button.
export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  modifiers: "mds-button--secondary"
};

// Secondary in dark theme.
export const SecondaryOnDark = DarkTemplate.bind({});
SecondaryOnDark.args = {
  label: "Secondary",
  modifiers: "mds-button--secondary"
};

// Secondary with branding.
export const SecondaryBranded = Template.bind({});
SecondaryBranded.args = {
  label: "Secondary Button",
  modifiers: "mds-button--secondary mds-button--branded"
};
// Disables the controls for a given story.
SecondaryBranded.story = {
  parameters: {
    controls: { disable: true }
  }
};

// An 'icon' button - uses multiple modifiers, empty label to present ionicon.
export const LargeSearchIconButton = Template.bind({});
LargeSearchIconButton.args = {
  label: "",
  icon: "search",
  modifiers: "mds-button--square mds-button--large"
};
// Disables the controls for a given story.
LargeSearchIconButton.story = {
  parameters: {
    controls: { disable: true }
  }
};
