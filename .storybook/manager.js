import { addons } from "@storybook/addons";

// Adds DSM config.
import { getDsmOptions } from "@invisionapp/dsm-storybook";
addons.setConfig({
  ...getDsmOptions(process.env.STORYBOOK_DSM)
});
