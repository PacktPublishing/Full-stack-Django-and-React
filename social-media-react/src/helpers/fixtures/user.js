import { faker } from "@faker-js/faker";
import { v4 as uuid4 } from "uuid";

function userFixtures() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return {
    id: uuid4(),
    first_name: firstName,
    last_name: lastName,
    name: firstName + " " + lastName,
    post_count: Math.floor(Math.random() * 10),
    email: `${firstName}@yopmail.com`,
    bio: faker.lorem.sentence(20),
    username: firstName + lastName,
    avatar: null,
    created: faker.date.recent(),
    updated: faker.date.recent(),
  };
}

export default userFixtures;
