import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import environment from "../../config/environment";

function Ajuda() {

  fetch(environment).then((response) => response.json())

  return(
    <div>
      <Header/>
      <div className="container">
        <PageTitle>Ajuda</PageTitle>

      </div>

    </div>
  )
}

export default Ajuda;