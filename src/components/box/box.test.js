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
 * Tests for box component.
 *
 * Runs a few tests to make sure the template acccepts and renders params.
 */

// Test the default box.
test("Find Default Box.", async () => {
  const { container } = await render("./src/components/box/box.twig");

  // See if the box renders.
  getByTestId(container, "mds-box");
});

// Test the default box content.
test("Find Default Box Content.", async () => {
  const { container } = await render("./src/components/box/box.twig");

  // See if the box renders at all.
  getByTestId(container, "mds-box");

  // Check that some of the default text is present.
  getAllByText(container, /sample/i);
});

// Test the Box template with overriden content. via embed method.
test("Find Box with new content.", async () => {
  // Dynamically create Twig template to test overriding default footerChildren
  // block content.
  const template = Twig.twig({
    // To include a template file the following params ar BOTH required:
    // Required to use 'include', 'embed', 'extend' fn's.
    allowInlineIncludes: true,

    // Required so template file can be found.
    path: "./src/components/box/",

    // Tags for a temporary template that extends box.twig and replaces the
    // content block with new data (i.e. testing that 'slot'.)
    data: `
    <!-- embeds box.twig template. -->
    {% embed "box.twig" %}
      <!-- overrides block footerChildren default content. -->
      {% block content %}
        <p>New box contents go here!</p>
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

  // See if the box renders at all, this testid should be always there.
  getByTestId(container, "mds-box");

  // See if the new content text exists.
  getByText(container, "New box contents go here!");

  // Clean up by reomoving the element from the DOM.
  baseElement.removeChild(container);
});

// Test the Box template with overriden content via extend method.
test("Extend Box with new content.", async () => {
  // Dynamically create Twig template to test overriding default footerChildren
  // block content.
  const template = Twig.twig({
    // To include a template file the following params ar BOTH required:
    // Required to use 'include', 'embed', 'extend' fn's.
    allowInlineIncludes: true,

    // Required so template file can be found.
    path: "./src/components/box/",

    // Tags for a temporary template that extends box.twig and replaces the
    // content block with new data (i.e. testing that 'slot'.)
    data: `
    <!-- Extends box.twig template. -->
    {% extends "box.twig" %}
      <!-- Overrides block: 'content' default contents. And sets a modifier.-->
      {% set modifiers="bg-red" %}
      {% block content %}
        <p>New box contents go here!</p>
      {% endblock %}
    `
  });

  // Render the template to a string.
  const rendered = template.render();

  // Get an element to append to on the DOM for jest to test.
  const baseElement = document.body;

  // Append a container to the element.
  const container = baseElement.appendChild(document.createElement("div"));

  // Set innerHTML using the rendered string from tempplate.
  container.innerHTML = rendered;

  // See if the box renders at all, this testid should be always there.
  getByTestId(container, "mds-box");

  // See if the new content text exists.
  getByText(container, "New box contents go here!");

  // Clean up by reomoving the element from the DOM.
  baseElement.removeChild(container);
});
