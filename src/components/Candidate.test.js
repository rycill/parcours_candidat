import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Candidate from "./Candidate";
let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("s’affiche avec ou sans nom", () => {
  const vo = {
    name: "faux nom",
    firstname: "firstname plop",
    specialités: [".NET"],
  };
  act(() => {
    const comp = <Candidate candidate={vo} />;
    render(comp, container);
  });
  expect(container.querySelector(".name").textContent).toBe("Nom: " + vo.name);
});
