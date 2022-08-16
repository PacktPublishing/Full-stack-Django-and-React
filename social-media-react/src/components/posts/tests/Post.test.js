import { render, screen } from "@testing-library/react";
import Post from "../Post";

const post = {
  id: "e6d3e4b53f18453babf369665cbd26d8",
  author: {
    id: "8380ca50ad0f414188ef69dc9b0707ad",
    username: "koladev",
    name: "Michel Mangabo"
  },
  body: "This a simple Post.",
  edited: false,
  liked: true,
  likes_count: 1,
  comments_count: 4,
  created: "2022-07-07T10:32:56.393467Z",
  updated: "2022-07-07T10:32:56.393489Z"
};


test("render Post component", () => {
    render(<Post data-testid="post-test" post={post} />)

    const postElement = screen.getByTestId("post-test");

    expect(postElement).toBeInTheDocument();

})
