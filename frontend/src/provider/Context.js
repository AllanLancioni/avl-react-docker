import { createContext } from "react";

export const data = {
  number: 1,
  dataTree: []
};


const Context = createContext(null);

export default Context;