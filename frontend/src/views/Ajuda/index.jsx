import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import environment from "../../config/environment";

function Ajuda() {

  const text = fetch(`${environment.api}/ajuda`)
  .then(function(response) {
    response.text()
  })
  .catch(function(error) {
    console.error(error)
  })

  return(
    <div>
      <Header/>
      <div className="container">
        <PageTitle>Ajuda</PageTitle>
        <span>
          { text }
        </span>
      </div>

    </div>
  )
}

export default Ajuda;