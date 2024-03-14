import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { render } from "@testing-library/react";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe("Pruebas en el <PrivateRoute />", () => {
  test("debe de mostrar el children si no esta autenticado", () => {
    Storage.prototype.setItem = jest.isMockFunction();
    D;

    const contextValue = {
      logged: true,
      user: {
        id: "abc",
        name: "Juan Carlos",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/search?q=batman"]}>
          <PrivateRoute>
            <h1>Ruta publica</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
