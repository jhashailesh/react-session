import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";

describe('<Todo /> App', () => {

  it('should render all default task', () => {
    render(<Todo />);
    const data = screen.getAllByRole('checkbox');
    expect(data.length).toEqual(3);
  });

  it('should contain Vapasi 2021 task', () => {
    render(<Todo />);
    const data = screen.getByLabelText('Vapasi 2021');
    expect(data).toBeInTheDocument()
  });

  it('should taggle status on click', () => {
    render(<Todo />);
    const checkbox = screen.getByTestId('3');
    expect(checkbox.checked).toBeFalsy();
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeTruthy();
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeFalsy();
  });

  it(
    'should add new task in todo list on adding new task', () => {
      render(<Todo />);
      const addTaskElement = screen.getByTestId('addTask')
      const input = within(addTaskElement).getByRole('textbox');
      const addButton = within(addTaskElement).getByRole('button');
      const task = "<YOUR TASK NAME HERE>"
      userEvent.type(input, task);
      userEvent.click(addButton);

      // Expect number of task increased by one
      // Earlier it was 3. now it is 4


      // Expect the task you have added is in the document on in DOM
  });


})
