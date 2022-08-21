import { render, screen } from "./helpers/test-utils";
import App from "./App";

test("renders Welcome to Postagram text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Postagram!/i);
  expect(linkElement).toBeInTheDocument();
});
