import { render, screen } from "@testing-library/react";
import Posts from "./Posts";

describe('<Posts /> App', () => {

  it('should render a post in dom', () => {
    render(<Posts />);
    // const postWithTitle = screen.getByText("")

    // expect(postWithTitle).toBeInTheDocument();
  });
})