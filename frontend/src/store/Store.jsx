import AVLTree from "avl";
import { createContext } from "react";


export const initialState = {
  nodesNumber: 1,
  _AVLTree: new AVLTree(),
  tree: null
};

export const Context = createContext();


export function Store({ children }) {
  return(
    <Context.Provider value={null}>
      { children }
    </Context.Provider>
  )
}
