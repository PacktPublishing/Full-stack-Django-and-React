import { render, screen, fireEvent } from "../../../helpers/test-utils";
import userFixtures from "../../../helpers/fixtures/user";
import ProfileDetails from "../ProfileDetails";
import { setUserData } from "../../../hooks/user.actions";

const user = userFixtures();

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

test("Render Profile details component", () => {
  render(<ProfileDetails user={user} />);

  const profileDetails = screen.getByTestId("profile-details");
  expect(profileDetails).toBeInTheDocument();

  const nameElement = screen.getByText(user.name);
  expect(nameElement).toBeInTheDocument();

  const bioElement = screen.getByText(user.bio);
  expect(bioElement).toBeInTheDocument();
});
