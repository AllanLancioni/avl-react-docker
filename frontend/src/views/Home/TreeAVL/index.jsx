import { useReducer } from "react";
import { initialState, reducer } from "../../../store";
import NodeAVL from './NodeAVL';

export default function TreeAVL({ tree }) {

  const [state] = useReducer(reducer, initialState);

  console.log('state', state);
  return (
    <div className="card">
      <h3>Gerar Árvore AVL</h3>
      <div>
        <NodeAVL node={ tree } />
      </div>
    </div>
  )
}