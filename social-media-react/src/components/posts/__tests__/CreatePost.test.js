import { render, screen, fireEvent } from "../../../helpers/test-utils";
import userEvent from "@testing-library/user-event";
import CreatePost from "../CreatePost";
import { setUserData } from "../../../hooks/user.actions";
import userFixtures from "../../../helpers/fixtures/user";
import {faker} from "@faker-js/faker";


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

test("Create Post form renders", async () => {
    const user = userEvent.setup();
    render(<CreatePost />)

    const showModalForm = screen.getByTestId("show-modal-form");
    expect(showModalForm).toBeInTheDocument();

    // Clicking to show the modal

    fireEvent.click(showModalForm);

    const createFormElement = screen.getByTestId("create-post-test");
    expect(createFormElement).toBeInTheDocument();

    const postBodyInput = screen.getByTestId('post-body-input');
    expect(postBodyInput).toBeInTheDocument()

    const submitButton = screen.getByTestId("create-post-submit");
    expect(submitButton).toBeInTheDocument()

    expect(submitButton.disabled).toBeTruthy();

    const postBody = faker.lorem.sentence(10);

    await user.type(postBodyInput, postBody);

    // Checking if input has the text and button is not disabled

    expect(postBodyInput.value).toBe(postBody);
    expect(submitButton.disabled).toBeFalsy();

})
