import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Ckeck out these EPIC desitnations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel Through the islands of Bali"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Explore the Deep sea of the nile river"
              label="Exploration"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Play with vibrancy in the island of Barbados"
              label="Fun"
              path="/services"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Experience the luxury of Monaco"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
