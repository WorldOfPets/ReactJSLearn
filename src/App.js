import { BrowserRouter } from 'react-router-dom';
import './App.css';
import GameBlock from './main-components/GameBlock';
import Header from './main-components/Header/Header';
import InfoBlock from './main-components/InfoBlock';
import MainBlock from './main-components/MainBlock';
import MyComponents from './main-components/MyComponents';
import OrderBlock from './main-components/OrderBlock';
//<Route path='/mycomponents' component={MyComponents}/>
//href="/mycomponents"
//<NavLink to='/mycomponents' activeClassName{}>My componets</NavLink>
const App = () => {
    return (
      <BrowserRouter>
        <div className="Grid">
          <Header />
          <MainBlock />
          <MyComponents />
          <GameBlock />
          <OrderBlock />
          <InfoBlock />
        </div>
      </BrowserRouter>
    );
}

export default App;
