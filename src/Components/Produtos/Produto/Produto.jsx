import {Col, Card, Button } from 'react-bootstrap';

export default function Produto(props) {

  return (
    <Col style={{diplay:"inline-block"}} id={props.categoria} className={" boxProduto mb-2"}>
    <Card style={{ minWidth: '18rem', width: '18rem' }}>
       <Card.Title>{props.categoria}</Card.Title>
       <Card.Img  variant="top" src={require(`./img/${props.imagem}`).default} alt="Imagem de Produtos"/>
       <Card.Body>
           <Card.Text>
           <p>{props.descricao}</p>
            <span>R$ {props.preco_final}</span> <Button variant="success" size='sm' >+</Button>
           </Card.Text>
           
       </Card.Body>
   </Card>
 </Col>

  )
}