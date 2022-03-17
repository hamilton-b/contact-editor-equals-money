import { Contact} from "~/models/Contact";
import { reduceContacts } from "./reduceContacts";

it("reduces contact array into object", () => {
  const input: Contact[] = [
    {
      createdAt: "2021-12-22T07:11:08.136Z",
      name: "Olive Sawayn",
      avatar: "https://i.pravatar.cc/300",
      email: "Chadd_MacGyver0@hotmail.com",
      phone: "(264) 221-8092 x4383",
      birthday: "2021-01-14T01:43:04.943Z",
      id: "5",
    },
    {
      createdAt: "2021-12-21T16:57:41.550Z",
      name: "Melody Jacobi",
      avatar: "https://i.pravatar.cc/300",
      email: "Gretchen73@hotmail.com",
      phone: "1-811-658-9113",
      birthday: "2021-05-24T06:54:15.513Z",
      id: "6",
    },
  ];

  const expectedOutput = {
    "5": {
      createdAt: "2021-12-22T07:11:08.136Z",
      name: "Olive Sawayn",
      avatar: "https://i.pravatar.cc/300",
      email: "Chadd_MacGyver0@hotmail.com",
      phone: "(264) 221-8092 x4383",
      birthday: "2021-01-14T01:43:04.943Z",
      id: "5",
    },
    "6": {
      createdAt: "2021-12-21T16:57:41.550Z",
      name: "Melody Jacobi",
      avatar: "https://i.pravatar.cc/300",
      email: "Gretchen73@hotmail.com",
      phone: "1-811-658-9113",
      birthday: "2021-05-24T06:54:15.513Z",
      id: "6",
    },
  };

  expect(reduceContacts(input)).toEqual(expectedOutput);
});
