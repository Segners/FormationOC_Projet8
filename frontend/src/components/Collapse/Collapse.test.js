import { render, screen, fireEvent } from "@testing-library/react";
import Collapse from "./Collapse";
import React from "react";

describe("Tests du composant collapse", () => {
  test("Le composannt est fermé par défaut", () => {
    render(<Collapse title="Test Title">This is content</Collapse>);

    expect(screen.getByText("This is content")).not.toHaveClass("open");
  });

  test("Le composant open quand on click sur le chevron", () => {
    render(<Collapse title="Test Title">This is content</Collapse>);

    const titleElement = screen.getByText("Test Title");
    const chevron = titleElement
      .closest(".collapse-header")
      .querySelector(".collapse-chevron");

    fireEvent.click(chevron);

    expect(screen.getByText("This is content")).toHaveClass("open");

    fireEvent.click(chevron);

    expect(screen.getByText("This is content")).not.toHaveClass("open");
  });
});
