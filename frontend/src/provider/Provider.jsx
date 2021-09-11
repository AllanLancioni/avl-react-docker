import Context, { data } from "./Context";

// const [state, setState] = useState(data)

export default function Provider({ children }) {
  return(
    <Context.Provider value={data}>
      { children }
    </Context.Provider>
  )
}
