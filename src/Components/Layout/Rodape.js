import './Card.css'
import Copyright from './Copyright'

function Rodape (){

    return(

        <div>
            <div className="pagamento">
                <p > Formas de Pagamento </p>
                <img src={require('../Layout/imagens/pagamento.JPG').default} 
                 alt=""/>
                <p > Fullstack Flores </p>
                <Copyright ano="2021"/>
            </div>
        </div>

      

    );
}

export default Rodape;