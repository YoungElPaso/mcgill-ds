// Import Tailwind CSS base, components and utilities.
import "../src/css/mds-tw-base.css";

// Import MDS CSS - the CSS thats custom to the MDS.
import "../src/css/mds-shared.css";

// Import FA CSS as a peer dependency.
import "@fortawesome/fontawesome-pro/css/fontawesome.css";
import "@fortawesome/fontawesome-pro/css/light.css";

// Import DSM decorator.
import { withDsm } from "@invisionapp/dsm-storybook";

// Export DSM decorator.
export const decorators = [withDsm];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
};

// TODO: resume DSM deploy deps.

// TODO: resume FA/Details/Icon work.
