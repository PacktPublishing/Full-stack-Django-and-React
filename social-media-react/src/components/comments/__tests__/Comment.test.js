import { render, screen } from "../../../helpers/test-utils";
import Comment from "../Comment";
import { setUserData } from "../../../hooks/user.actions";
import userFixtures from "../../../helpers/fixtures/user";
import commentFixtures from "../../../helpers/fixtures/comment";

const user = userFixtures();

const comment = commentFixtures(true, false, user);

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

test("testing Comment component", () => {
  render(<Comment comment={comment} />);

  const commentElement = screen.getByTestId("comment-test");

  expect(commentElement).toBeInTheDocument();
});
