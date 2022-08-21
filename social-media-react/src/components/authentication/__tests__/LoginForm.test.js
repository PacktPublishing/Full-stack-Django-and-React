import { render, screen } from "../../../helpers/test-utils";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";
import { faker } from "@faker-js/faker";
import userFixtures from "../../../helpers/fixtures/user";

const userData = userFixtures();

test("renders Login form", async () => {
  const user = userEvent.setup();
  render(<LoginForm />);

  const loginForm = screen.getByTestId("login-form");
  expect(loginForm).toBeInTheDocument();

  const usernameField = screen.getByTestId("username-field");
  expect(usernameField).toBeInTheDocument();

  const passwordField = screen.getByTestId("password-field");
  expect(passwordField).toBeInTheDocument();

  const password = faker.lorem.slug(2);
  await user.type(usernameField, userData.username);
  await user.type(passwordField, password);

  expect(usernameField.value).toBe(userData.username);
  expect(passwordField.value).toBe(password);
});
