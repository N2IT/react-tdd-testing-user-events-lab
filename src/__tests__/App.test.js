import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";
import userEvent from "@testing-library/user-event";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render (<App />)

  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
  expect(screen.getByTestId(/name/i)).toBeInTheDocument();
  
  expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();


});

test("the form includes three checkboxes to select areas of interest", () => {
  render (<App />)

  const htmlCheckBox = screen.getByRole("checkbox", { name: /html/i })
  const cssCheckBox = screen.getByRole("checkbox", { name: /css/i })
  const javascriptCheckBox = screen.getByRole("checkbox", { name: /javascript/i })
  expect(htmlCheckBox).toBeInTheDocument();
  expect(cssCheckBox).toBeInTheDocument();
  expect(javascriptCheckBox).toBeInTheDocument();

  screen.debug()
});


test("the checkboxes are initially unchecked", () => {
  // your test code here
  render (<App />)

  const htmlCheckBox = screen.getByRole("checkbox", { name: /html/i })
  const cssCheckBox = screen.getByRole("checkbox", { name: /css/i })
  const javascriptCheckBox = screen.getByRole("checkbox", { name: /javascript/i })
  expect(htmlCheckBox).not.toBeChecked();
  expect(cssCheckBox).not.toBeChecked();
  expect(javascriptCheckBox).not.toBeChecked();

  
})

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
  render (<App />)

  const name = screen.getByLabelText(/name/i);
  userEvent.type(name, "Tony Eder")

  const email = screen.getByLabelText(/email/i)
  userEvent.type(email, "tonye@rainier.com")

  expect(name).toHaveValue("Tony Eder")
  expect(email).toHaveValue("tonye@rainier.com")

});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
  render (<App />)
  
  const htmlCheckBox = screen.getByRole("checkbox", { name: /html/i })
  const cssCheckBox = screen.getByRole("checkbox", { name: /css/i })
  const javascriptCheckBox = screen.getByRole("checkbox", { name: /javascript/i })

  userEvent.click(htmlCheckBox)
  userEvent.click(cssCheckBox)
  userEvent.click(javascriptCheckBox)

  expect(htmlCheckBox).toBeChecked();
  expect(cssCheckBox).toBeChecked();
  expect(javascriptCheckBox).toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
  render (<App />)

  userEvent.click(screen.getByRole("button", { name: /submit/i }))

  expect(screen.getByText(/you are now subscribed/i)).toBeInTheDocument()


});
