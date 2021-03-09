// Import query utilities:
import {
  getByText,
  getAllByText,
  getByTestId,
  getAllByAltText
} from "@testing-library/dom";
import "@testing-library/jest-dom";

// Get the component.
// TODO: without generic webpack Twig loader configuration, can't do:
// import Primary from "./Button.stories";
// which is a shame, because it'd be DRY and testing
// the docs at the same time. Currently on SB is configured
// to load Twig files, but jest isn't. Figure this out.
// See issue #10.

// Import the twig-testing-library render function.
// use it to render Twig template for testing.
import { render } from "twig-testing-library";

// Import Twig from Twig JS to use it for inline rendering
// (not from a template).
import Twig from "twig";

// Import Drupal filters and apply.
import drupal from "twig-drupal-filters";
drupal(Twig);

/**
 * Tests for footer component(s).
 *
 * Runs a few tests to make sure the template acccepts and renders params.
 */

// Test the default footer.
test("Find Default Footer.", async () => {
  const { container } = await render("./src/components/footer/footer.twig");

  // See if the footer renders.
  getByTestId(container, "mds-footer");
});

// Test the default footer-logo image component.
test("Find Default Footer Logo Image.", async () => {
  const { container } = await render(
    "./src/components/footer/footer-logo.twig"
  );

  // See if the footer-logo renders.
  getByTestId(container, "mds-footer-logo");

  // See if the footer-logo img source matches expectation.
  expect(container.querySelector("img")).toHaveAttribute(
    "src",
    expect.stringMatching("mcgill-logo.svg")
  );
});

// Test the default footer content - i.e. logo, some text.
test("Find Default Footer.", async () => {
  const { container } = await render("./src/components/footer/footer.twig");

  // See if the Footer renders at all.
  getByTestId(container, "mds-footer");

  // Check that the default logo is present with alt-text.
  getAllByAltText(container, /mcgill.*?logo/i);

  // Check that some of the default text is present.
  // getAllByText(container, /privacy.*?us/i);
});

// Test the Footer template with overriden child content.
test("Find Footer with new child elements.", async () => {
  // TODO: testing and resume Grid styling when back this aft!

  // Dynamically create Twig template to test overriding default footerChildren
  // block content.
  const template = Twig.twig({
    // To include a template file the following params ar BOTH required:
    // Required to use 'include', 'embed', 'extend' fn's.
    allowInlineIncludes: true,

    // Required so template file can be found.
    path: "./src/components/footer/",

    // Tags for a temporary template that embeds footer.twig and replaces the
    // footerChildren block with new data (i.e. testing that 'slot'.)
    // TODO: need to do an example for Box.twig as well, preferabbly using
    // extend fn rather than embed since extend is most likely way to use it.
    data: `
    <!-- embeds footer.twig template. -->
    {% embed "footer.twig" %}
      <!-- overrides block footerChildren default content. -->
      {% block footerChildren %}
        <p>Footer child elements go here!</p>
      {% endblock %}
    {% endembed %}`
  });

  // Render the template to a string.
  const rendered = template.render();

  // Get an element to append to on the DOM for jest to test.
  const baseElement = document.body;

  // Append a container to the element.
  const container = baseElement.appendChild(document.createElement("div"));

  // Set innerHTML using the rendered string from tempplate.
  container.innerHTML = rendered;

  // See if the footer renders at all, this testid should be always there.
  getByTestId(container, "mds-footer");

  // See if the new footerChilren text exists.
  getByText(container, "Footer child elements go here!");

  // Clean up by reomoving the element from the DOM.
  baseElement.removeChild(container);
});
