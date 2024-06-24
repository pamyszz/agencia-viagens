import styles from './escocia.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira from '../imagens/escocia.png'

function Escocia() {
    return (
        <div className={styles.container}>
            <ComponenteProps
                lugar=" Escocia"
                texto="A Escócia foi largamente ocupada pela primeira vez ao final da última era glacial, no Paleolítico, aproximadamente 10 mil anos atrás. A Escócia pré-histórica entrou no Neolítico em cerca de 4.000 a.C., na Idade do Bronze em 2.000 a.C. e na Idade do Ferro por volta de 700 a.C.. A história da Escócia registrada começa com a chegada do Império Romano no século I. A província romana da Britania estendia-se para norte até a Muralha de Antonino, que ia do Estuário do rio Clyde ao Estuário do rio Forth. A norte estava o território da Caledônia, cujo povo era chamado de  pictos, que significa em latim, ‘os pintados’. Devido aos constantes assaltos dos pictos, as legiões romanas foram forçadas a recuar para a Muralha de Adriaque ia do Estuário do rio Clyde ao Estuário doque ia do Estuário do rio Clyde ao Estuário dono ao longo dos  anos de sua abandonando aquele território no começo do século " 
                bandeira = {bandeira}/>
        </div>
    )
}

export default Escocia