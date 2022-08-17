import { render, screen } from "../../../helpers/test-utils";
import Post from "../Post";
import { setUserData } from "../../../hooks/user.actions";
import { MemoryRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const post = {
  id: "e6d3e4b53f18453babf369665cbd26d8",
  author: {
    id: "8380ca50ad0f414188ef69dc9b0707ad",
    username: "koladev",
    name: "Michel Mangabo",
  },
  body: "This a simple Post.",
  edited: false,
  liked: true,
  likes_count: 1,
  comments_count: 4,
  created: "2022-07-07T10:32:56.393467Z",
  updated: "2022-07-07T10:32:56.393489Z",
};

beforeEach(() => {
  // to fully reset the state between tests, clear the storage
  localStorage.clear();
  // and reset all mocks
  jest.clearAllMocks();

  setUserData({
    user: {
      id: "8380ca50ad0f414188ef69dc9b0707ad",
      username: "koladev",
      name: "Michel Mangabo",
    },
    access: null,
    refresh: null,
  });
});

test("render Post component", () => {
  render(<Post post={post} />);

  const postElement = screen.getByTestId("post-test");

  expect(postElement).toBeInTheDocument();
});
