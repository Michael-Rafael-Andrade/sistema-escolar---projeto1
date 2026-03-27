import { useState } from 'react';

function CadastrarLivros(){

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');

    const salvarLivro = (e) => {
        e.preventDefault();
        const novoLivro = { titulo, autor };

        fetch('http://localhost:5000/livros', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoLivro)}).then(() => {
                alert('Livro cadastrado com sucesso!');
                setTitulo('');
                setAutor('');
            });
    };

    return(
        <form onSubmit={salvarLivro}>
            <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Título" required />
            <input value={autor} onChange={e => setAutor(e.target.value)} placeholder="Autor" required />
            <button type='submit'>Cadastrar Livro</button>
        </form>
    );
}

export default CadastrarLivros;