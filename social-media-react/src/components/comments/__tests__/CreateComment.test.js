import { render, screen, fireEvent } from "../../../helpers/test-utils";
import { v4 as uuid4 } from "uuid";
import userEvent from "@testing-library/user-event";
import { setUserData } from "../../../hooks/user.actions";
import userFixtures from "../../../helpers/fixtures/user";
import { faker } from "@faker-js/faker";
import CreateComment from "../CreateComment";

const userData = userFixtures();

beforeEach(() => {
  // to fully reset the state between __tests__, clear the storage
  localStorage.clear();
  // and reset all mocks
  jest.clearAllMocks();

  setUserData({
    user: userData,
    access: null,
    refresh: null,
  });
});

test("Create Comment", async () => {
  const user = userEvent.setup();
  render(<CreateComment postId={uuid4()} />);

  const createFormElement = screen.getByTestId("create-comment-test");
  expect(createFormElement).toBeInTheDocument();

  const commentBodyField = screen.getByTestId("comment-body-field");
  expect(commentBodyField).toBeInTheDocument();

  const submitButton = screen.getByTestId("create-comment-submit");
  expect(submitButton).toBeInTheDocument();

  expect(submitButton.disabled).toBeTruthy();

  const commentBody = faker.lorem.sentence(10);

  await user.type(commentBodyField, commentBody);

  // Checking if field has the text and button is not disabled

  expect(commentBodyField.value).toBe(commentBody);
  expect(submitButton.disabled).toBeFalsy();
});
