import CardList from "./CardList"
import Label from "./partials/Label"

import comics from "../data/comics"
import Button from "./partials/Button"

const Main = () => {
  return (
    <main>
      <div className="container">
        <Label text="CURRENT SERIES" type="offset" />
        <CardList data={comics} />
        <div className="text-center mt-3">
          <Button text='LOAD MORE' type='solid' />
        </div>
      </div>
    </main>
  )
}

export default Main