import styles from './List.module.css';

function ListItem({ text, onClose }) {
  const clickHandler = () => {
    onClose(text);
  };

  return (
    <li className={styles.ListItem}>
      <div className={styles.content}>
        <p>{text}</p>
        <p className={styles.close} onClick={clickHandler}>x</p>
      </div>
    </li>
  );
}

export default function List({ items, onClose }) {
  return (
    <ul className={styles.List}>
      {items.map((item) => <ListItem key={item} text={item} onClose={onClose} />)}
    </ul>
  );
}
