import { React } from "react";

function Card({ details }) {
  const { title, url } = details;

  return (
    <div style={container}>
      <div style={cardHolder}>
        <h1 style={heading}>{title}</h1>
        <img loading="lazy" src={url} style={image} />
      </div>
    </div>
  );
}

const container = {
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
};

const cardHolder = {
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignContent: "center",
  border: "1px solid",
  borderRadius: "20px",
  margin: "20px",
  alignItems: "center",
  width: "60%",
  flexDirection: "column",
};

const heading = {
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignContent: "center",
};
const image = { width: "800px", height: "500px", margin: "20px" };
export default Card;
