import { createContext } from "react";
import AVLTree from 'avl';

export const data = {
  nodesNumber: 1,
  dataTree: new AVLTree()
};


const Context = createContext(null);

export default Context;