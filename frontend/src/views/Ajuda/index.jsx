import { useEffect, useState } from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import environment from "../../config/environment";
import './index.css';

function Ajuda() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`${environment.api}/ajuda`)
  .then(response => {
    if(response.ok) {
      return response.json()
    }
    throw response;
  })
    .then(data => {
      setData(data)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])

  return(
    <div>
      <Header/>
      <div className="container">
        <PageTitle>Ajuda</PageTitle>
        <span className="text-help">
          { data?.Ajuda }
        </span>
      </div>

    </div>
  )
}

export default Ajuda;