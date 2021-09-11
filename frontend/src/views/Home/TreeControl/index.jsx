import { useContext } from "react"
import Context from "../../../provider/Context";

export default function TreeControl() {

  return <div>aaaa</div>

  // const { state, setState } = useContext(Context);

  // const setNodes = function(value) {

  //   const nodeNumber = Math.max(value, 1);
  //   state.dataTree.clear();
  //   state.dataTree.load(Array(nodeNumber).fill(0).map((x, i) => i));

  //   setState({
  //     ...state,
  //     nodeNumber,
  //   })
  // }


  // return (
  //   <div className="card">
  //     <h4>Quantidade de Nós</h4>
  //     <input type="number" value={state.nodeNumber || 1}
  //       onChange={(e) => setNodes(e.target.value) } />
  //   </div>
  // )
}