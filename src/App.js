// import thing from ./place.jsx
import{BrowserRouter, Routes, Route, Link, useParams, useSearchParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [urlExtension, setUrlExtension] = useState('');
  const [planet, setPlanet] = useState({name: false});
  const [person, setPerson] = useState({name: false});
  const {id} = useParams();
  const {type} = useParams();
  console.log(`id: ${id}\ntype: ${type}`);

  const GrabFromApi = (props) =>{
    // const {id} = useParams();
    // const {type} = useParams();
    // let currentUrlExtension = `${type}/${id}`;
    let currentUrlExtension = `people/${id}`;
    console.log(`currentURLExtension: ${currentUrlExtension}`);
    // const url = window.location.href;
    // let currentUrlExtension = '';
    // if (url.includes('people')){
    //   currentUrlExtension = `people/${url.slice(url.length-2)}`;
    // } else if (url.includes('planets')) {
    //   currentUrlExtension = `planets/${url.slice(url.length-2)}`;
    // } else {
    //   currentUrlExtension = urlExtension;
    // }
    // axios.get('https://swapi.dev/api/' + currentUrlExtension)
    //   .then(response => {
    //     if (response.data.height !== undefined){
    //       setPerson({
    //         name: response.data.name,
    //         height: response.data.height,
    //         mass: response.data.mass,
    //         hair: response.data.hair_color,
    //         skin: response.data.skin_color
    //       });
    //       setPlanet({name: false});
    //     } else if (response.data.climate !== undefined) {
    //       setPlanet({
    //         name: response.data.name,
    //         climate: response.data.climate,
    //         terrain: response.data.terrain,
    //         water: (response.data.surface_water === '1'? 'true': 'false'),
    //         population: response.data.population
    //       });
    //       setPerson({name: false});
    //     };
    //     return response.data;
    //   }).catch(error=>{
    //     console.log(error);
    //   });
    return (
      <h1>API call finished</h1>
    );
  }

  const DisplayPlanets = (props) =>{
    if (planet.name !== false){
      return(
        <>
          <h2 className='my-4'>{planet.name}</h2>
          <p><strong>Climate: </strong>{planet.climate}</p>
          <p><strong>Terrain: </strong>{planet.terrain}</p>
          <p><strong>Surface Water: </strong>{planet.water}</p>
          <p><strong>Population: </strong>{planet.population}</p>
        </>
      );
    }
  }

  const DisplayPeople = (props) =>{
    if (person.name !== false){
      return(
        <>
          <h2 className='my-4'>{person.name}</h2>
          <p><strong>Height: </strong>{person.height}</p>
          <p><strong>Mass: </strong>{person.mass}</p>
          <p><strong>Hair Color: </strong>{person.hair}</p>
          <p><strong>Skin Color: </strong>{person.skin}</p>
        </>
      );
    }
  }

  const SearchForm = (props) => {
    return(
      <form className='d-flex' onSubmit={e => handleSubmit(e)}>
        <label htmlFor="selectFilter" className='me-2'>Search&nbsp;for:</label>
        <select name="selectFilter" id="selectFilter" className='form-control me-4'>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <label htmlFor="idSearch" className='me-2'>ID:</label>
        <input type="number" name="idSearch" id="idSearch" className='form-control me-4' />
        <button className="btn btn-primary" type='submit'>Search</button>
      </form>
    );
  }

  const handleSubmit = (props) => {
    props.preventDefault();
    const url = `${props.target[0].value}/${props.target[1].value}/`;
    setUrlExtension(url);
    // useNavigate(url);
    // GrabFromApi();
  }

  const Home = (props) => {
    // <SearchForm/>
  }

  return (
    <div className="container mt-3">
      {/* <button className="btn btn-primary m-3" onClick={GrabFromApi}>fetch stuff</button> */}
      <SearchForm/>
      {/* <DisplayPlanets/> */}
      {/* <DisplayPeople/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='planets/:id' element={<DisplayPlanets/>}/>
        <Route path='people/:id' element={<DisplayPeople/>}/>
      </Routes>
    </div>
  );
}

export default App;
