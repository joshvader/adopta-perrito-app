
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';

const Boton = ({texto, color}) => {
    return (
        <>
            <Badge bg={color} className='badge'>{texto}</Badge>
        </>
    )
}
Boton.propTypes = {
    texto: PropTypes.string.isRequired, 
    color: PropTypes.string.isRequired
};

export default Boton;