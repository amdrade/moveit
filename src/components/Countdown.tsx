import {useState, useEffect} from 'react';
import styles from '../styles/Countdown.module.css';

export function Countdown() {
    const [tempo, setTempo] = useState(25 * 60);
    const [ativo, setAtivo] = useState(false);
    const [label, setLabel] = useState('Iniciar um ciclo');
    const minutos = Math.floor(tempo / 60);
    const segudos = tempo % 60;

    const [minutosEsquerda, minutosDireita] = String(minutos).padStart(2,'0').split('');
    const [segundosEsquerda, segundosDireita] = String(segudos).padStart(2,'0').split('');

    useEffect(() => {
        if (ativo && tempo > 0) {
            setTimeout(() => {
                setTempo(tempo - 1);
            }, 1000);
        }
    }, [tempo, ativo])

    return (
        <div>
            <div className={styles.container}>
                <div>
                    <span>{minutosEsquerda}</span>
                    <span>{minutosDireita}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{segundosEsquerda}</span>
                    <span>{segundosDireita}</span>
                </div>
            </div>
            <button type="button" className={styles.botao} onClick={() => setAtivo(!ativo)}>{label}</button>
        </div>
    )
}