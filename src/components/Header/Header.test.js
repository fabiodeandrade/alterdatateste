import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MyHeader } from "./Header.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Testing Header component", () => {
  it("should appear in user screen", () => {
    render(
      <MemoryRouter>
        <MyHeader />
      </MemoryRouter>
    );

    const topMsg = screen.getByText("AREA ADMINISTRATIVA");

    expect(topMsg).toBeInTheDocument();
  });

  it("Shold show a logo company to the user", () => {
    render(
      <MemoryRouter>
        <MyHeader />
      </MemoryRouter>
    );

    const imgHeader = screen.getByRole("img");
    expect(imgHeader).toBeInTheDocument();
  });

  it('Should teste a logo link', () => {
    render(
      <MemoryRouter>
        <MyHeader />
      </MemoryRouter>
    );

    const logoLink = screen.getByRole('link');
    expect(logoLink).toBeInTheDocument();
   })
});
