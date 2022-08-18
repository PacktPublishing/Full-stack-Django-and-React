import { render, screen, fireEvent } from "../../../helpers/test-utils";
import userFixtures from "../../../helpers/fixtures/user";
import ProfileCard from "../ProfileCard";

const userData = userFixtures();

test("Render ProfileCard component", () => {
  render(<ProfileCard user={userData} />);

  const profileCard = screen.getByTestId("profile-card");
  expect(profileCard).toBeInTheDocument();

  const nameElement = screen.getByText(userData.name);
  expect(nameElement).toBeInTheDocument();
});
