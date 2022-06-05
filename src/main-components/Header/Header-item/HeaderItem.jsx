import s from './HeaderItem.module.css';

const HeaderItem = (props) => {
    return (
        <span className={s.Item} activeClassName={s.activeItem}>{props.title}</span>
    );
}

export default HeaderItem;