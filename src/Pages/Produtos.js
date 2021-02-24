
import { Col, Row } from 'react-bootstrap';

import {lazy, Suspense} from 'react';

const Produtos = lazy(() => import('../Components/Produtos/Produtos'));
const Categoria = lazy(() => import ('../Components/Categoria'));
const Rodape = lazy(() => import ('../Components/Layout/Rodape'));

//import Produtos from '../Components/Produtos/Produtos'
//import Categoria from '../Components/Categoria'
//import Rodape from '../Components/Layout/Rodape'


export default function PageProdutos(props){

    return(
      
      <div>
        <h2 className="border-bottom py-5 text-center">Produtos</h2>
        <Row>
            <Col lg={3} md={4}>
              <Suspense fallback ={ <p>Carregando...</p> }>
                <Categoria />
              </Suspense>
            </Col>
              
            <Col lg={9} md={8}>
              <Suspense fallback ={ <p>Carregando...</p> }>
                <Produtos /> 
              </Suspense>
            </Col>

        </Row>
      
        <Suspense fallback ={ <p>Carregando...</p> }>
                 <Rodape/>
            </Suspense>
            
      </div>


    );
}


      
 