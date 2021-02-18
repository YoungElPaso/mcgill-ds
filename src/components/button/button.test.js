// Import query utilities:
import { getByText, getByTestId } from "@testing-library/dom";
import "@testing-library/jest-dom";

// Get the button component.
// TODO: without generic webpack Twig loader configuration, can't do:
// import Primary from "./Button.stories";
// which is a shame, because it'd be DRY and testing
// the docs at the same time. Currently on SB is configured
// to load Twig files, but jest isn't. Figure this out.

// Import the twig-testing-library render function.
// use it to render Twig template for testing.
import { render } from "twig-testing-library";

/**
 * Tests for button component.
 *
 * Runs a few tests to make sure the template acccepts and renders params.
 */

// Test the primary button (default).
test("Find Primary Button with Label", async () => {
  const { container } = await render("./src/components/button/button.twig", {
    label: "Primary Button"
  });

  // See if the button renders.
  getByTestId(container, "mds-button");

  // See if the label text exists.
  getByText(container, "Primary Button");
});

// Test the button that uses an ionicon.
test("Find Button with Search Icon", async () => {
  const { container } = await render("./src/components/button/button.twig", {
    label: "Button With Icon",
    icon: "search"
  });

  // See if the ionicon is rendered.
  getByTestId(container, "ionicon");
});

// Test the button with the 'Ghost' button modifier class.
test("Find Button with Secondary Modifier Class", async () => {
  const { container } = await render("./src/components/button/button.twig", {
    label: "Secondary Button",
    modifiers: "mds-button--secondary"
  });

  // See if the mds-button--secondary class is rendered.
  const button = getByTestId(container, "mds-button");
  expect(button).toHaveClass("mds-button--secondary");
});
