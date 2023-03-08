import React from "react";
import Character from "./Character";

const Characters = (props) => {
  const { characters, onLikeToggle, onDelete, addToFavourites } = props;

  return characters.map((item) => {
    return (
      <div className="character" key={item.uniqueId}>
        <Character
          liked={item.liked}
          name={item.character}
          quote={item.quote}
          image={item.image}
          charcterDirection={item.characterDirection}
          onLikeToggle={onLikeToggle}
          onDelete={onDelete}
          added={item.added}
          addToFavourites={addToFavourites}
        />
      </div>
    );
  });
};

export default Characters;
