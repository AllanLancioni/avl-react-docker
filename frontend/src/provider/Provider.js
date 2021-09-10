import context from "./Context";

const data = {};

function Provider({ children }) {
  return(
    <context.Provider value={data}>
      { children }
    </context.Provider>
  )
}

export default Provider;