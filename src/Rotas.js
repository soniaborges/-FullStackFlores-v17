import {Switch, Route} from 'react-router-dom';
import PageProdutos from './Pages/Produtos';
import Pedidos from './Pages/Pedidos';
import Lojas from './Pages/Lojas';
import Contato from './Pages/Contato';
import Home from './Pages/Home';


function Rotas (){
    return(
        

        <Switch>
            <Route exact path="/" component ={Home}/>   
            <Route exact path="/Produtos" component ={PageProdutos}/>
            <Route exact path="/Pedidos" component ={Pedidos}/>
            <Route exact path="/Lojas" component ={Lojas}/>
            <Route exact path="/Contato" component ={Contato}/>
          </Switch>



                  
   
    );
}

export default Rotas;