import styles from './Title.module.scss';

function Title(props) {
  return (
    <div className={styles.title}>
        <h2 className={styles.itemTitle}>{props.title}</h2>
    </div>
  );
}

export default Title;
