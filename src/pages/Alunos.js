import { useEffect, useState } from "react";
import styles from './Alunos.module.css'

function Alunos(){    

    const [alunos, setAlunos] = useState([]); // Armazena a lista do banco de dados
    const [busca, setBusca] = useState(''); // Armazena o que o usuário digita
    const [loading, setLoading] = useState(true);

    // Desafio 2 - Consumir o arquivo JSON na porta escolhida (5000)
    useEffect(() => {
        fetch('http://localhost:5000/alunos')
        .then(response => response.json())
        .then(dados => setAlunos(dados));
    },[]);

    // Desafio 1 - Filtrar a lista
    const alunosFiltrados = alunos.filter(aluno => aluno.nome.toLowerCase().includes(busca.toLowerCase()));

    // useEffect( ()=> {

    //     const dados = [
    //         {id: 1, nome: 'Maria Silva', curso: 'Informática'},
    //         {id: 2, nome: 'João Souza', curso: 'Informática'},
    //         {id: 3, nome: 'Ana Costa', curso: 'Informática'},
    //         {id: 4, nome: 'José da Silva', curso: 'Informática'},
    //         {id: 5, nome: 'Fernanda Santos', curso: 'Informática'},
    //         {id: 6, nome: 'Gabriel Henrique', curso: 'Informática'},
    //     ]

        // setTimeout(() =>{
        //     setAlunos(dados);
        //     setLoading(false);
        // }, 2000);

    // }, []);

    // if(loading){
    //     return <p className={styles.loading}>Carregando alunos...</p>
    // }

    return(
        <div className={styles.container}>
            <h1>Lista de Alunos</h1>

            <input type="text" placeholder="Buscar aluno..." value={busca} onChange={(e) => setBusca(e.target.value)} 
            />

            <ul>
                {alunosFiltrados.lenght > 0 ? (alunosFiltrados.map(aluno =>( <li key={aluno.id}>{aluno.nome}</li>))) : (<p>Nenhum aluno encontrado. </p>)}
            </ul>

            {alunos.length === 0 ? (<p className={styles.vazio}>Nenhum aluno encontrado.</p>) 
            : (
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map(aluno => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.curso}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </div>
    );
}

export default Alunos;