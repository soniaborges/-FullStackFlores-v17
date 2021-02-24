import { Button, Card, Container, Form, React,CardDeck } from 'react-bootstrap';
import { useState, useEffect } from 'react'

export default function Contato(props) {

  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    async function fethData() {
      const url = "http://localhost:8000/recebe_mensagem";
      const resposta = await fetch(url);
      const resultado = await resposta.json();
      setComentarios(resultado);
    }
    fethData();
  }, []);

  const [dadosForm, setDadosForm] = useState({
    nome: '',
    mensagem: ''
  });
  function handleChange(evento) {
    dadosForm[evento.target.name] = evento.target.value;
    console.log(dadosForm);
  }
  const enviaMSG = async () => {

    const url = "http://localhost:8000/envia_mensagem";
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dadosForm)
    });
  }

  return (

    <Container >
      <Form  >
        <Form.Group >
          <Form.Label><h3>Nome:</h3></Form.Label>
          <Form.Control type="nome" name="nome"
          placeholder="Coloque seu Nome: (Pagina em Construção, formulario não funciona)" />
        </Form.Group>

        <Form.Group >
          <Form.Label><h3>Coloque sua mensagem:</h3></Form.Label>
          <Form.Control as="textarea" name="mensagem"  
          rows={7} placeholder="Aguardamos por sua msg.....(Pagina em Construção , formulario não funciona) " />
        </Form.Group>
        
        <Button variant="outline-success" type="submit" block>
          Enviar
        </Button>
      </Form>

      <CardDeck>

      {comentarios && comentarios
        .map(item =>
         
          <Card border="danger" style={{ width: '25rem' }}>
            <Card.Body>
            <Card.Title>{item.nome}</Card.Title>
            <Card.Text>
            {item.mensagem}
            </Card.Text>
          </Card.Body>
        </Card>
         )}
    </CardDeck>
    </Container>


  )
}