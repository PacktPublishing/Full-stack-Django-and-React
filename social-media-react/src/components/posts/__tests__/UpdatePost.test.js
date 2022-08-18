import { render, screen, fireEvent } from "../../../helpers/test-utils";
import userEvent from "@testing-library/user-event";
import UpdatePost from "../UpdatePost";
import { setUserData } from "../../../hooks/user.actions";
import userFixtures from "../../../helpers/fixtures/user";
import postFixtures from "../../../helpers/fixtures/post";
import { faker } from "@faker-js/faker";

const user = userFixtures();

const post = postFixtures(true, false, user);

beforeEach(() => {
  // to fully reset the state between __tests__, clear the storage
  localStorage.clear();
  // and reset all mocks
  jest.clearAllMocks();

  setUserData({
    user: user,
    access: null,
    refresh: null,
  });
});

test("Create Post form renders", async () => {
  const user = userEvent.setup();
  render(<UpdatePost post={post} />);

  const showModalForm = screen.getByTestId("show-modal-form");
  expect(showModalForm).toBeInTheDocument();

  // Clicking to show the modal

  fireEvent.click(showModalForm);

  const createFormElement = screen.getByTestId("show-modal-form");
  expect(createFormElement).toBeInTheDocument();

  const postBodyInput = screen.getByTestId("post-body-input");
  expect(postBodyInput).toBeInTheDocument();

  const submitButton = screen.getByTestId("update-post-submit");
  expect(submitButton).toBeInTheDocument();

  const postBody = faker.lorem.sentence(10);

  await user.type(postBodyInput, postBody);

  // Checking if input has the text and button is not disabled

  expect(postBodyInput.value).toBe(post.body + postBody);
  expect(submitButton.disabled).toBeFalsy();
});
