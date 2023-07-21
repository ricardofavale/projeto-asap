import { useState } from "react";
import styles from '../componentes/Desafio.css'

export default function Desafio() {

    const [input, setInput] = useState('');
    const [resultado, setResultado] = useState('');

    const valorInput = (e) => {
        setInput(e.target.value);
    };

    const numerosPorExtenso = [
        'zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove',
        'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'
    ];

    const dezenasPorExtenso = [
        '', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa', 'cem'
    ];

    function dezenas(numero){
        var digitoUnico = Math.floor(numero / 10);
        var resto = numero % 10;
        return dezenasPorExtenso[digitoUnico] + (resto !== 0 ? ' e ' + numerosPorExtenso[resto] : '');
    }

    function exibir(){

        var valor = parseInt(input)

        if(isNaN(valor) || valor < 0 || valor > 100){
            setResultado("Favor informar um número de 0 a 100");
        }else if(valor === 0){
            setResultado(numerosPorExtenso[0]);
        }else if(valor < 20){
            setResultado(numerosPorExtenso[valor]);
        }else{
            setResultado(dezenas(valor));
        }
    }

    return (
        <div className="container">
            <h1>Número para ser convertido</h1>

            <label htmlFor="numero">Informar um numero de 0 a 100</label>
            <input type="number" value={input} onChange={valorInput} min={0} max={100}/>
            <button onClick={exibir}>Exibir Resultado</button>
            <p>{resultado}</p>


        </div>
    )
}
