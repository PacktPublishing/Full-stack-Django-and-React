import { render, screen } from "../../../helpers/test-utils";
import TestRenderer from "react-test-renderer";
import Post from "../Post";
import { setUserData } from "../../../hooks/user.actions";
import userFixtures from "../../../helpers/fixtures/user";
import { BrowserRouter } from "react-router-dom";

const userData = userFixtures();
const postData = {
  id: "ee2a9a31-c4b7-4884-984a-3d55043f8ba2",
  author: {
    id: "0590cd67-eacd-4299-8413-605bd547ea17",
    first_name: "Mossie",
    last_name: "Murphy",
    name: "Mossie Murphy",
    post_count: 3,
    email: "Mossie@yopmail.com",
    bio: "Omnis necessitatibus facere vel in est provident sunt tempora earum accusantium debitis vel est architecto minima quis sint et asperiores.",
    username: "MossieMurphy",
    avatar: null,
    created: "2022-08-19T17:31:03.310Z",
    updated: "2022-08-20T07:38:47.631Z",
  },
  body: "Qui corrupti ut sint provident id et recusandae placeat ad at asperiores odit occaecati praesentium minus id cumque quia molestiae.",
  edited: false,
  liked: true,
  likes_count: 2,
  comments_count: 2,
  created: "2022-08-19T21:10:09.197Z",
  updated: "2022-08-20T05:46:26.549Z",
};

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
