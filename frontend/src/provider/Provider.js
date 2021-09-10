import context from "./Context";

function Provider({ children }) {
  return(
    <context.Provider>
      { children }
    </context.Provider>
  )
}

export default Provider;