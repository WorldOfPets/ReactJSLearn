import HeaderItem from './Header-item/HeaderItem';
import s from './Header.module.css';
import logo from './../../image/logo.png'

const Header = () => {
    return (
        <header className={s.header}>
            <HeaderItem title='About me'/>
            <HeaderItem title='My contact'/>
            <img className={s.logo} src={logo} alt={"logo"}/>
            <HeaderItem title='2048'/>
            <HeaderItem title='Make an order'/>
        </header>
    );
}

export default Header;