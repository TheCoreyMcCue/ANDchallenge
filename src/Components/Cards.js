import React from "react";
import Card from "./Card";

const cards = () => {
  return (
    <div className="cards">
      <Card name={"Joe"} title={"Marble Enthusist"} />
      <Card name={"Kelly"} title={"Animal Enthusist"} />
      <Card name={"George"} title={"Music Enthusist"} />
      <Card name={"Bill"} title={"Flower Enthusist"} />
      <Card name={"Frank"} title={"Water Enthusist"} />
      <Card name={"Sarah"} title={"Hiking Enthusist"} />
    </div>
  );
};

export default cards;
