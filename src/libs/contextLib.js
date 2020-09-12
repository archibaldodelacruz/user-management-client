import { useContext, createContext } from "react";

export const AppContext = createContext({userinfo: null});

export function UseAppContext() {
  return useContext(AppContext);
}

/*
{
    "id": "5e93775f6d7a886870dd2169",
    "username": "pepecrash",
    "password": "12345",
    "nombre": "Jose",
    "apellido": "Guerrero",
    "edad": 32,
    "genero": "masculino"
}
*/