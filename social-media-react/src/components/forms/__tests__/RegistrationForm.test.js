import { render, screen } from "../../../helpers/test-utils";
import userEvent from "@testing-library/user-event";
import RegistrationForm from "../RegistrationForm";
import { faker } from "@faker-js/faker";
import userFixtures from "../../../helpers/fixtures/user";

const userData = userFixtures();

test("register component", async () => {
  const user = userEvent.setup();
  render(<RegistrationForm />);

  const registerForm = screen.getByTestId("register-form");
  expect(registerForm).toBeInTheDocument();

  const firstNameInput = screen.getByTestId("first-name-input");
  expect(firstNameInput).toBeInTheDocument();

  const lastNameInput = screen.getByTestId("last-name-input");
  expect(lastNameInput).toBeInTheDocument();

  const emailAddressInput = screen.getByTestId("email-input");
  expect(emailAddressInput).toBeInTheDocument();

  const usernameInput = screen.getByTestId("username-input");
  expect(usernameInput).toBeInTheDocument();

  const passwordInput = screen.getByTestId("password-input");
  expect(passwordInput).toBeInTheDocument();

  const bioInput = screen.getByTestId("bio-input");
  expect(bioInput).toBeInTheDocument();

  const password = faker.lorem.slug(2);
  await user.type(usernameInput, userData.username);
  await user.type(firstNameInput, userData.first_name);
  await user.type(lastNameInput, userData.last_name);
  await user.type(emailAddressInput, userData.email);
  await user.type(bioInput, userData.bio);
  await user.type(passwordInput, password);

  expect(usernameInput.value).toBe(userData.username);
  expect(passwordInput.value).toBe(password);
  expect(firstNameInput.value).toBe(userData.first_name);
  expect(lastNameInput.value).toBe(userData.last_name);
  expect(emailAddressInput.value).toBe(userData.email);
  expect(bioInput.value).toBe(userData.bio);
});
