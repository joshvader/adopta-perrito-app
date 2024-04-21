import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import CardGroup from "react-bootstrap/CardGroup";


//Imagenes
import img1 from "./assets/perrito1.jpg"
import img2 from "./assets/perrito2.jpg"
import img3 from "./assets/perrito3.jpg"
import img4 from "./assets/perrito4.jpg"


function App() {
  

  return (
    <>
    <Header title="Adopta un perrito"/>
    <CardGroup>
    <Cards
    img={img1} 
    name="Popolo" 
    desc="Popolo,lleno de energia y amor, es un verdadero explorador. Su pelaje de tonalidades cálidas resalta su naturaleza amigable."
    color="success"
    texto="Ver más" 
    />
    <Cards
    img={img2} 
    name="Bartolo" 
    desc="Bartolo, es jugeton, amigable, se lleva muy bien con los niños y otros animales !Haz que sea parte de tu familia, llevatelo ya!"
    color="primary"
    texto="Ver más" 
    />
    <Cards
    img={img3} 
    name="Chocolo" 
    desc="Chocolo, es un cachorro muy especial, siempre con ganas de seguir jugando. Es el compañero perfecto para salir a pasear."
    color="danger"
    texto="Ver más" 
    />
    <Cards
    img={img4} 
    name="Candy" 
    desc="Su mirada te hipnotizará, llena de ternura cautivará a todos los miembros de tu casa, ademas, siempre estara a tu lado."
    color="warning"
    texto="Ver más" 
    />
    </CardGroup>
    <Footer/>

    </>
  )
}

export default App
