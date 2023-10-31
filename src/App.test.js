import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

jest.mock("./components/Sidebar/Sidebar", () => {
  return () => <div data-testid="sidebar">Sidebar</div>;
});

jest.mock("./Routes/Links", () => {
  return () => <div data-testid="links">Links</div>;
});

jest.mock("./context/navigation", () => {
  const originalModule = jest.requireActual("./context/navigation");
  return {
    ...originalModule,
    NavigationProvider: ({ children }) => (
      <div data-testid="navigation-provider">{children}</div>
    ),
  };
});

describe("App component", () => {
  test("renders Sidebar, Links and NavigationProvider components", () => {
    render(<App />);
    
    const sidebar = screen.getByTestId("sidebar");
    const links = screen.getByTestId("links");
    const navigationProvider = screen.getByTestId("navigation-provider");

    expect(sidebar).toBeInTheDocument();
    expect(links).toBeInTheDocument();
    expect(navigationProvider).toContainElement(sidebar);
    expect(navigationProvider).toContainElement(links);
  });
});
