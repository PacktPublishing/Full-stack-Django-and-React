import { render, screen } from "../../../helpers/test-utils";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";
import { faker } from "@faker-js/faker";
import userFixtures from "../../../helpers/fixtures/user";

const userData = userFixtures();

test("login component", async () => {
  const user = userEvent.setup();
  render(<LoginForm />);

  const loginForm = screen.getByTestId("login-form");
  expect(loginForm).toBeInTheDocument();

  const usernameInput = screen.getByTestId("username-input");
  expect(usernameInput).toBeInTheDocument();

  const passwordInput = screen.getByTestId("password-input");
  expect(passwordInput).toBeInTheDocument();

  const password = faker.lorem.slug(2);
  await user.type(usernameInput, userData.username);
  await user.type(passwordInput, password);

  expect(usernameInput.value).toBe(userData.username);
  expect(passwordInput.value).toBe(password);
});
