// import thing from ./place.jsx
import{Routes, Route, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {

  const DisplayHouse = (props) =>{
    const [house, setHouse] = useState({});
    const {id} = useParams();
    useEffect(() => {
      axios.get(`https://anapioficeandfire.com/api/houses/${id}`)
        .then(response => {
          setHouse({
            name: response.data.name,
            region: response.data.region,
            words: response.data.words,
            founded: response.data.founded,
          });
        }).catch(error=>{
          console.log(error);
        });
    },[id]);
    if (house.name !== false){
      return(
        <>
          <h2 className='my-4'>{house.name}</h2>
          <p><strong>Region: </strong>{house.region}</p>
          <p><strong>Words: </strong>{house.words}</p>
          <p><strong>Founded: </strong>{house.founded}</p>
        </>
      );
    }
  }

  const DisplayCharacter = (props) =>{
    const [character, setCharacter] = useState({});
    const {id} = useParams();
    useEffect(() => {
      axios.get(`https://anapioficeandfire.com/api/characters/${id}`)
        .then(response => {
          setCharacter({
            name: response.data.name,
            gender: response.data.gender,
            born: response.data.born,
            culture: response.data.culture,
          });
        }).catch(error=>{
          console.log(error);
        });
    },[id]);
      return(
        <>
          <h2 className='my-4'>{character.name}</h2>
          <p><strong>Gender: </strong>{character.gender}</p>
          <p><strong>Born: </strong>{character.born}</p>
          <p><strong>Culture: </strong>{character.culture}</p>
        </>
      );
}

  const SearchForm = (props) => {
    const [id, setId] = useState('583');
    const [type, setType] = useState('characters');
    const navigate = useNavigate();
    const HandleSubmit = (e) => {
      e.preventDefault();
      const url = `/${type}/${id}`;
      navigate(url);
    }
    return(
      <form className='d-flex' onSubmit={HandleSubmit}>
        <label htmlFor="selectFilter" className='me-2'>Search&nbsp;for:</label>
        <select name="selectFilter" id="selectFilter" className='form-control me-4' onChange={e => setType(e.target.value)} value={type}>
          <option value="characters">Characters</option>
          <option value="houses">Houses</option>
        </select>
        <label htmlFor="idSearch" className='me-2'>ID:</label>
        <input type="number" name="idSearch" id="idSearch" className='form-control me-4' onChange={e => setId(e.target.value)} value={id}/>
        <button className="btn btn-primary" type='submit'>Search</button>
      </form>
    );
  }

  return (
    <div className="container mt-3">
      <SearchForm/>
      <Routes>
        <Route path='/houses/:id' element={<DisplayHouse/>}/>
        <Route path='/characters/:id' element={<DisplayCharacter/>}/>
      </Routes>
    </div>
  );
}

export default App;
