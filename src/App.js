import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import api from './services/api';
import './styles.css';

function App() {

  // Funcao Input sai com está sem valor é ganha uma valor na parte de baixo
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    // 72120400/json/
    if (input === '') {
      alert("Preencha Algum CEP !")
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");

    } catch {
      alert("Ops erro ao buscar! ");
      setInput("")
    }
  }

  function handleClear() {
    setCep({}); // Define o estado 'cep' como um objeto vazio para limpar as informações
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>


      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Complemento : {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>

          <button onClick={handleClear} style={{
            background: 'firebrick',
            color: 'white',
            fontSize: '15px',
             padding: '10px 20px' 
          }}>
            Limpar
          </button>
        </main>
      )
      }
    </div >
  );
}
export default App;