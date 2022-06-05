import s from './HeaderItem.module.css';

const HeaderItem = (props) => {
    return (
        <span className={s.Item}>{props.title}</span>
    );
}

export default HeaderItem;