import React from "react";
import { render } from "@testing-library/react";
import Banner from "./Banner";

describe("tests pour la bannière du site", () => {
  it("Affiche le text par default du site", () => {
    const { getAllByText } = render(<Banner showText={true} />);
    const elements = getAllByText("Chez vous, partout et ailleurs");
    expect(elements.length).toBeGreaterThan(0);
  });

  it("Affiche un text passé en props", () => {
    const customText = "Texte de Test";
    const { getAllByText } = render(
      <Banner showText={true} text={customText} />
    );

    const elements = getAllByText(customText);
    expect(elements.length).toBeGreaterThan(0);
  });

  it("Si showText est false, n'affiche pas le texte", () => {
    const { queryByText } = render(<Banner showText={false} />);
    expect(queryByText("Chez vous, partout et ailleurs")).toBeNull();
  });

  it("Applique backgroundImage style", () => {
    const backgroundImage = "test-image.jpg";
    const { container } = render(<Banner backgroundImage={backgroundImage} />);
    const banner = container.querySelector(".banner");

    expect(banner).toHaveStyle(`background-image: url(${backgroundImage})`);
  });
});
