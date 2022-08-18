import { render, screen, fireEvent } from "../../../helpers/test-utils";
import { v4 as uuid4 } from "uuid";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import UpdateComment from "../UpdateComment";
import userFixtures from "../../../helpers/fixtures/user";
import commentFixtures from "../../../helpers/fixtures/comment";

const user = userFixtures();

const comment = commentFixtures(true, false, user);

test("Update Comment", async () => {
  const user = userEvent.setup();
  render(<UpdateComment postId={uuid4()} comment={comment} />);

  const showModalForm = screen.getByTestId("show-modal-form");
  expect(showModalForm).toBeInTheDocument();

  // Clicking to show the modal

  fireEvent.click(showModalForm);

  const updateFormElement = screen.getByTestId("update-comment-test");
  expect(updateFormElement).toBeInTheDocument();

  const commentBodyInput = screen.getByTestId("comment-body-input");
  expect(commentBodyInput).toBeInTheDocument();

  const submitButton = screen.getByTestId("update-comment-submit");
  expect(submitButton).toBeInTheDocument();

  expect(submitButton.disabled).toBeFalsy();

  const commentBody = faker.lorem.sentence(10);

  await user.type(commentBodyInput, commentBody);

  // Checking if input has the text and button is not disabled

  expect(commentBodyInput.value).toBe(comment.body + commentBody);
  expect(submitButton.disabled).toBeFalsy();
});
