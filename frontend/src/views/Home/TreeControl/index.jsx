import { useContext, useState } from "react"
import Context from "../../../provider/Context";

export default function TreeControl() {

  const [nodes, setNodes] = useState(1);
  const context = useContext(Context);


  return (
    <div className="card">
      <h4>Quantidade de Nós</h4>
      <input type="number" value={nodes} onChange={(e) => setNodes(Math.max(+e.target.value, 1))} />
      <span>{ context.number }</span>
    </div>
  )
}