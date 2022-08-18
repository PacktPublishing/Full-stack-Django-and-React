import { render, screen } from "../../../helpers/test-utils";
import Post from "../Post";
import { setUserData } from "../../../hooks/user.actions";
import userFixtures from "../../../helpers/fixtures/user";
import postFixtures from "../../../helpers/fixtures/post";

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

test("render Post component", () => {
  render(<Post post={post} />);

  const postElement = screen.getByTestId("post-test");

  expect(postElement).toBeInTheDocument();
});
