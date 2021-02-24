
import Carousel from 'react-bootstrap/Carousel'
import './Card.css'


function Carouselinicial (){

    return(
       
       
       <Carousel className="container align-self-center d-flex justify-content-center">
            <Carousel.Item>
                <img
                className="d-block w-80 mx-auto "
                src={require('./imagens/capa.JPG').default}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-80 mx-auto"
                src={require('./imagens/capa.JPG').default}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3> </h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-80 mx-auto  "
                src={require('./imagens/capa.JPG').default}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carouselinicial;


