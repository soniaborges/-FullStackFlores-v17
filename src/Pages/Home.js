import {lazy, Suspense} from 'react';

const Carouselinicial = lazy(() => import('../Components/Layout/Carousel'));
const Rodape = lazy(() => import ('../Components/Layout/Rodape'));

//import Carouselinicial from '../Components/Layout/Carousel'
//import Rodape from '../Components/Layout/Rodape'



function Home (){

    return(
        <div> 
            <Suspense fallback ={ <p>Carregando...</p> }>
                 <Carouselinicial/>
            </Suspense>

            <Suspense fallback ={ <p>Carregando...</p> }>
                 <Rodape/>
            </Suspense>
            
        </div>

        
    );
}

export default Home;