import React from "react";
import Fullname from "./Fullname";
import { createRenderer } from "react-test-renderer/shallow";

const setup = (editing = false) => {
  const props = {
    firstName: "Kori",
    lastName: "Roys"
  };

  const renderer = createRenderer();

  renderer.render(<Fullname {...props} />);

  let output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
};

describe("components", () => {
  describe("Fullname", () => {
    it("initial render!", () => {
      const { output } = setup();

      expect(output.type).toBe("div");
      expect(output.props.className).toBe("fullname");
      expect(output.props.children).toBe("Kori Roys");
    });
  });
});
