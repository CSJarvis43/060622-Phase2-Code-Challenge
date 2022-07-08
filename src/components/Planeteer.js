import React, {useState} from "react";

function Planeteer({planeteer}) {

  const {name, pictureUrl, twitter, bio, quote} = planeteer

  const [showBack, setShowBack] = useState(false)

  function handleBio() {
    setShowBack(!showBack)
  }


  return (
    <li className="cards__item">
      <div className="card" onClick={handleBio}>
        <img
          src={pictureUrl}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{!showBack ? bio : quote}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>
              {
                planeteer.fromUSA ? "USA-based" : "Working overseas"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
