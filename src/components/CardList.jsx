import Card from "./Card"
import style from "./css/CardList.module.css"

const CardList = (props) => {
  const cards = props.data;

  return (
    <div className={style['card-list']}>
      {cards.map(card => (
        <Card
          key={`comicCard-${card.id}`}
          title={card.series}
          img={card.thumb} />
      ))}
    </div>
  )
}

export default CardList