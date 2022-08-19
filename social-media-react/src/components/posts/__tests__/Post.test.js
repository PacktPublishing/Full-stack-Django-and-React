import { render, screen } from "../../../helpers/test-utils";
import TestRenderer from "react-test-renderer";
import Post from "../Post";
import { setUserData } from "../../../hooks/user.actions";
import userFixtures from "../../../helpers/fixtures/user";
import postFixtures from "../../../helpers/fixtures/post";
import { BrowserRouter } from "react-router-dom";

const userData = userFixtures();

const postData = postFixtures(true, false, userData);

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

test("render Post component", () => {
  render(<Post post={postData} />);

  const postElement = screen.getByTestId("post-test");

  expect(postElement).toBeInTheDocument();
});

describe("Post component snapshot", () => {
  it("Matches DOM snapshot", () => {
    const postDomTree = TestRenderer.create(
      <BrowserRouter>
        <Post post={postData} />
      </BrowserRouter>
    ).toJSON();
    expect(postDomTree).toMatchSnapshot();
  });
});
