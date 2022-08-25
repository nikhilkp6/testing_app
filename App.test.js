import { render, screen } from "@testing-library/react";
import App from "./App";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Movies from "./Movies";
import BookStore from "./BookStore";

configure({ adapter: new Adapter() });

describe("first test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("renders learn react link", () => {
    expect(wrapper.find("h1").text()).toContain("hello nikhil kp");

    // const { getByText } = render(<App />);
    // const linkElement = getByText("hello nikhil kp");
    // expect(linkElement).toBeInTheDocument();
  });

  test("to test the button name", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("test the initial value of state", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("test incrementing", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("test decrementing", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("-1");
  });

  //api testing
  it("api testing", async function () {
    const response = new Movies();
    var data = await response.api();
    expect(data.movies[0].id).toEqual("1");
  });

  it("api testing for title", async function () {
    const response = new Movies();
    var data2 = await response.api();
    expect(data2.movies[0].title).toEqual("Star Wars");
  });

  it("api testing my application", async function () {
    const res = new BookStore();
    var BookData = await res.api();
    expect(BookData.books[0].name).toEqual("The Pilgrim’s Progress");
  });

  it("api testing my application author", async function () {
    const resp = new BookStore();
    var BookData = await resp.api();
    expect(BookData.books[0].author).toEqual("ohn Bunyan (1678");
  });
});
