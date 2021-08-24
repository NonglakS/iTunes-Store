import { render, screen } from "@testing-library/react";
import App from "./../App";

test("renders search bar", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/Search/);
  expect(linkElement).toBeInTheDocument();
});
