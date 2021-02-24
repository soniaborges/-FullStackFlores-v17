import React from 'react'

import {lazy, Suspense} from 'react';

const ListaLojas = lazy(() => import('../Components/Layout/ListaLojas'));
const Rodape = lazy(() => import ('../Components/Layout/Rodape'));

//import ListaLojas from '../Components/Layout/ListaLojas'
//import Rodape from '../Components/Layout/Rodape'

function Lojas (){

    return(
        <div> 
            <Suspense fallback ={ <p>Carregando...</p> }>
            <ListaLojas/>
            </Suspense>                
            <hr/>
            <br/>
            <Suspense fallback ={ <p>Carregando...</p> }>
            <Rodape/>
            </Suspense>
            
            
        </div>

        
    );
}

export default Lojas;



