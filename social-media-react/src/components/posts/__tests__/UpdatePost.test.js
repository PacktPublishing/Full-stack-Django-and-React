import { render, screen, fireEvent } from "../../../helpers/test-utils";
import userEvent from "@testing-library/user-event";
import UpdatePost from "../UpdatePost";
import userFixtures from "../../../helpers/fixtures/user";
import postFixtures from "../../../helpers/fixtures/post";
import { faker } from "@faker-js/faker";

const userData = userFixtures();

const postData = postFixtures(true, false, userData);

test("Create Post form renders", async () => {
  const user = userEvent.setup();
  render(<UpdatePost post={postData} />);

  const showModalForm = screen.getByTestId("show-modal-form");
  expect(showModalForm).toBeInTheDocument();

  // Clicking to show the modal

  fireEvent.click(showModalForm);

  const createFormElement = screen.getByTestId("show-modal-form");
  expect(createFormElement).toBeInTheDocument();

  const postBodyField = screen.getByTestId("post-body-field");
  expect(postBodyField).toBeInTheDocument();

  const submitButton = screen.getByTestId("update-post-submit");
  expect(submitButton).toBeInTheDocument();

  const postBody = faker.lorem.sentence(10);

  await user.type(postBodyField, postBody);

  // Checking if field has the text and button is not disabled

  expect(postBodyField.value).toBe(postData.body + postBody);
  expect(submitButton.disabled).toBeFalsy();
});
