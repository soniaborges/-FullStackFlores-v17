import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';



function ListaLojas() {
  return (
      <CardDeck>
        <Card style={{ minWidth: '18rem', width: '18rem'}}>
          
          <Card.Body>
            <Card.Title>São Paulo</Card.Title>
            <Card.Text>
              <p>Rua das Amélias, 35</p>
              <p><strong> Bairro Jardim Aeroporto</strong></p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">(11) 5555-5555</small>
          </Card.Footer>
        </Card>
        <Card style={{ minWidth: '18rem', width: '18rem'}}>
         
          <Card.Body>
            <Card.Title>Campinas</Card.Title>
            <Card.Text>
            <p>Avenida Rio Grande, 1875</p>
            <p><strong> Bairro Jardim Pavanelo</strong></p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">(19) 7777-7777</small>
          </Card.Footer>
        </Card>
        <Card style={{ minWidth: '18rem', width: '18rem'}}>
            <Card.Body>
            <Card.Title>São Caetano do Sul</Card.Title>
            <Card.Text>
            <p>Av Goiás, 1965</p>
            <p><strong> Bairro Barcelona</strong></p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">(11) 1111-1111</small>
          </Card.Footer>
        </Card>
    </CardDeck>
  )
}

export default ListaLojas;