import styles from "./ComponenteProps.module.css";

function ComponenteProps({ lugar, texto, bandeira }) {
  //as partees editaveis precisam estar como parametro para que sejam alteradas
  return (
    <div className={styles.corpo_texto}>
      <h2>
        Venha explorar esse lugar incrivel! Venha conhecer
        {lugar}
      </h2>
      <p>{texto}</p>
      <img className={styles.imagem} src={bandeira} alt="Bandeira" />
    </div>
  );
}

export default ComponenteProps;
