//4 things to import

import React from "react";
import { render, queryAllByText, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Simple from "./01.Simple";

// snapshot testing
// assertions on component

it("renders", () => {
  const { asFragment } = render(<Simple text="yahoo" />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders", () => {
  const { getByText } = render(<Simple text="yahoo" />);
  const elm = getByText("yahoo");
  // const elm = queryAllByText("yahoo");
  expect(elm).toBeInTheDocument();
});

it("shows input element", () => {
  const { getByDisplayValue } = render(<Simple text="yahoo" />);
  expect(getByDisplayValue("yaddi")).toBeInTheDocument();
});

// GetBy + Text

// QueryBy + PlaceholderText --> negative situation
