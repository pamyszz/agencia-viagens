import styles from './home.module.css'
import img from '../imagens/mala.jfif'

function Home() {
    return (
        <main className={styles.home_container}>
            <div className={styles.container_img}>
                <img src={img} alt="" />
            </div>

            <div className={styles.container_texto}>
                <h1 className={styles.titulo}>Encontre a viagem dos seus sonhos</h1>
                <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi molestias et dignissimos reiciendis amet officiis odio, ex modi aut, quaerat mollitia omnis laborum at maiores laboriosam suscipit temporibus ad veniam!</p>
            <button className={styles.btn}>Conhecer</button>
            </div>
        </main>
    )
}

export default Home