import { useState } from "react"

export default function TreeControl() {

  const [nodes, setNodes] = useState(1)

  return (
    <div className="card">
      <h4>Quantidade de Nós</h4>
      <input type="number" value={nodes} onChange={(e) => setNodes(Math.max(+e.target.value, 1))} />
    </div>
  )
}