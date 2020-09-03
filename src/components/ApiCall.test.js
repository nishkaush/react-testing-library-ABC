import React from "react";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ApiCall from "./ApiCall";

fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: "yahoo", body: "my body" }),
  })
);

it("renders", () => {
  const { asFragment } = render(<ApiCall />);
  expect(asFragment()).toMatchSnapshot();
});

it("shows loader when get-todo button is clicked", async () => {
  const { getByTestId, getByText, queryByText } = render(<ApiCall />);

  const getTodoBtn = getByTestId("my-btn");
  fireEvent.click(getTodoBtn);

  const loader = queryByText("Loading...");
  expect(loader).toBeInTheDocument();

  await waitForElementToBeRemoved(() => queryByText("Loading..."));
});
