describe("Pruebas en <TodoItem />", () => {
  const todo = {
    id: 1,
    description: "Piedra del Alma",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("debe de mostrar el Todo Pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodoMock={onDeleteTodoMock}
      />

      const liElement = screen.getByRole('listItem');
      expect( liElement.className).toBe('list-group-item d-flex justify-content-between');

      const spanElement = screen.getByRole('span');
      expect( spanElement.className ).not.toContain('align-self-center');

    //   screen.debug();
    );
  });
});
