import { render, screen, fireEvent } from "../../../helpers/test-utils";
import { v4 as uuid4 } from "uuid";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import UpdateComment from "../UpdateComment";
import userFixtures from "../../../helpers/fixtures/user";
import commentFixtures from "../../../helpers/fixtures/comment";

const userData = userFixtures();

const commentData = commentFixtures(true, false, userData);

test("Update Comment", async () => {
  const user = userEvent.setup();
  render(<UpdateComment postId={uuid4()} comment={commentData} />);

  const showModalForm = screen.getByTestId("show-modal-form");
  expect(showModalForm).toBeInTheDocument();

  // Clicking to show the modal

  fireEvent.click(showModalForm);

  const updateFormElement = screen.getByTestId("update-comment-test");
  expect(updateFormElement).toBeInTheDocument();

  const commentBodyField = screen.getByTestId("comment-body-field");
  expect(commentBodyField).toBeInTheDocument();

  const submitButton = screen.getByTestId("update-comment-submit");
  expect(submitButton).toBeInTheDocument();

  expect(submitButton.disabled).toBeFalsy();

  const commentBody = faker.lorem.sentence(10);

  await user.type(commentBodyField, commentBody);

  // Checking if field has the text and button is not disabled

  expect(commentBodyField.value).toBe(commentData.body + commentBody);
  expect(submitButton.disabled).toBeFalsy();
});
