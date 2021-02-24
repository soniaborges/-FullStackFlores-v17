import {ListGroup} from 'react-bootstrap'

export default function Catedoria(){
  
  const FiltrarCategoria = (evento) =>{
      const categoria = evento.target.id;
      let elementos = document.getElementsByClassName('boxProduto');
      console.log(elementos);
      for (var i = 0; i < elementos.length; i++) {
        if (categoria === elementos[i].id || categoria === "todos"){
            elementos[i].style = "display: inline-block";
        }
        else{
            elementos[i].style = "display: none";
        }
    }
  }
  
  return(
   
    <aside>
      <ListGroup variant="flush">
        <ListGroup.Item onClick={FiltrarCategoria} id="todos" action>Todos</ListGroup.Item>
        <ListGroup.Item onClick={FiltrarCategoria} id="buquet" action>Buquets</ListGroup.Item>
        <ListGroup.Item onClick={FiltrarCategoria} id="vaso" action>Vasos</ListGroup.Item>
        <ListGroup.Item onClick={FiltrarCategoria} id="orquidea" action>Orquídeas</ListGroup.Item>
        <ListGroup.Item onClick={FiltrarCategoria} id="cesta" action>Cestas de Café</ListGroup.Item>
      </ListGroup>
    </aside>
  )
}