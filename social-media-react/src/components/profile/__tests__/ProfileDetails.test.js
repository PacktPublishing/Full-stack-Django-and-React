import { render, screen, fireEvent } from "../../../helpers/test-utils";
import userFixtures from "../../../helpers/fixtures/user";
import ProfileDetails from "../ProfileDetails";
import { setUserData } from "../../../hooks/user.actions";

const userData = userFixtures();

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

test("Render Profile details component", () => {
  render(<ProfileDetails user={userData} />);

  const profileDetails = screen.getByTestId("profile-details");
  expect(profileDetails).toBeInTheDocument();

  const nameElement = screen.getByText(userData.name);
  expect(nameElement).toBeInTheDocument();

  const bioElement = screen.getByText(userData.bio);
  expect(bioElement).toBeInTheDocument();
});
