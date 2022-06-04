import './App.css';
import GameBlock from './main-components/GameBlock';
import Header from './main-components/Header';
import InfoBlock from './main-components/InfoBlock';
import MainBlock from './main-components/MainBlock';
import MyComponents from './main-components/MyComponents';
import OrderBlock from './main-components/OrderBlock';
const App = () => {
    return (
      <div className="Grid">
        <Header/>
        <MainBlock/>
        <MyComponents/>
        <GameBlock/>
        <OrderBlock/>
        <InfoBlock/>
      </div>
    );
}

export default App;
