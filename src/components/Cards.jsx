import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";
import Boton from "./Tags";

const Cards = ({img, name, desc, color, texto}) => {
  return (
    <>
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={img} className="imagen"/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
          <Boton color={color} texto={texto} />
        </Card.Body>
      </Card>
    </>
  )
}
Cards.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

export default Cards