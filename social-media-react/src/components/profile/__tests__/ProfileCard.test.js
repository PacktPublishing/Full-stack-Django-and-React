import { render, screen, fireEvent } from "../../../helpers/test-utils";
import userFixtures from "../../../helpers/fixtures/user";
import ProfileCard from "../ProfileCard";

const user = userFixtures();

test("Render ProfileCard component", () => {
  render(<ProfileCard user={user} />);

  const profileCard = screen.getByTestId("profile-card");
  expect(profileCard).toBeInTheDocument();

  const nameElement = screen.getByText(user.name);
  expect(nameElement).toBeInTheDocument();
});
