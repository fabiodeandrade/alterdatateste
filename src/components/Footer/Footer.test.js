import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { MyFooter } from "./Footer.jsx";

describe("Testing Footer component", () => {
  it("should show a message in footer", () => {
    render(
      <MemoryRouter>
        <MyFooter />
      </MemoryRouter>
      );
      
      const footerMsg = screen.getByText(
        "Criado com dedicação e coração por Fábio de Andrade"
      );

      expect(footerMsg).toBeInTheDocument()

  });
});
