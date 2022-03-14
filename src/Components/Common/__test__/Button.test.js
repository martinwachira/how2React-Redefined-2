import "@testing-library/jest-dom/extend-expect";

import { cleanup, render } from "@testing-library/react";

import Button from "../Button";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders without fail", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders btn correctly", () => {
  const { getByTestId } = render(<Button label="click"></Button>);
  expect(getByTestId("btn")).toHaveTextContent("click");
});

it("renders btn 2 correctly", () => {
  const { getByTestId } = render(<Button label="order"></Button>);
  expect(getByTestId("btn")).toHaveTextContent("order");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button label="order"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () => {
  const tree = renderer.create(<Button label="order 2"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
