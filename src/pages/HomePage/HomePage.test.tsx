import { render, screen } from "@testing-library/react";
import { useContactContext } from "~/contexts/ContactContext";
import { HomePage } from "./HomePage";

const useContactContextMock = useContactContext as jest.Mock;

jest.mock("~/contexts/ContactContext", () => ({
  useContactContext: jest.fn(),
}));
jest.mock("~/components/ContactCard", () => ({
  ContactCard: () => <p>Mocked ContactCard</p>,
}));
jest.mock("react-router-dom", () => ({
  ContactCard: () => <p>Mocked Link</p>,
}));

test("renders title", () => {
  useContactContextMock.mockReturnValueOnce({ data: {} });
  render(<HomePage />);
  const titleElement = screen.getByText(/Contact List/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders create new button", () => {
  useContactContextMock.mockReturnValueOnce({ data: {} });
  render(<HomePage />);
  const titleElement = screen.getByText(/Create new/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders no contact cards when data returned", () => {
  useContactContextMock.mockReturnValueOnce({ data: {} });
  render(<HomePage />);
  const cardElement = screen.queryByText(/Mocked ContactCard/);
  expect(cardElement).toBeNull();
});

test("renders contact cards when data returned", () => {
  useContactContextMock.mockReturnValueOnce({
    data: {
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
    },
  });
  render(<HomePage />);
  const cardElements = screen.getAllByText(/Mocked ContactCard/);
  expect(cardElements).toHaveLength(2);
});
