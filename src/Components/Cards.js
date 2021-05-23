import { Card, Button } from "react-bootstrap";
import styles from "./Cards.module.css"

import React, { useState } from "react";

const Cards = (props) => {
  const [carder, setCarder] = useState(false)
  return (
    <Card className={styles.card_main}>
      <Card.Img variant="top" className={styles.card_img} src={props.image} />
      <Card.Body className={styles.card_body}>
        {
          carder === true ? (
            <>
              <Card.Title className={styles.card_text}>{props.name}</Card.Title>
              <Card.Title className={styles.card_text}>$ {props.price}</Card.Title>
              <Card.Title className={styles.card_text}>{props.text}</Card.Title>
            </>
          ) : null
        }

        <Button variant="primary" onClick={() => setCarder(!carder)}>Click Me!</Button>
      </Card.Body>
    </Card>
  );
};
export default Cards;
