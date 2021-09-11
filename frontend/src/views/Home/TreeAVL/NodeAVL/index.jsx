import "./index.css"

export default function NodeAVL({ node }) {

  if (!node) return <></>;

  return (
    <div>
      <div className="node">
        <span>{ node ? node.key : '' }</span>
      </div>
      <div className="flex">
        { node.left ? <NodeAVL node={node.left} /> : <div></div> }
        { node.right ? <NodeAVL node={node.right} /> : <div></div> }
      </div>
    </div>
  )
}