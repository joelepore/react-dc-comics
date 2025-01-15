import CardList from "./CardList"
import Label from "./partials/Label"

import comics from "../data/comics"

const Main = () => {
  return (
    <main>
      <div className="container">
        <Label text="CURRENT SERIES" type="offset" />
        <CardList data={comics} />
      </div>
    </main>
  )
}

export default Main