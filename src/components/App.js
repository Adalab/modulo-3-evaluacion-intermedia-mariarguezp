import { useState } from 'react';

import "../styles/App.scss";

import adalabersList from "../local-api/api.json";

//Importamos el fetch
// import callToApi from '../services/api';

//Importamos localStorage.js
// import ls from '../services/localStorage';

function App() {
  const [name, setName] = useState('');
  const [counselor, setCounselor] = useState('');
  const [speciality, setSpeciality] = useState('');

  const [data, setData] = useState(adalabersList);


  const renderList = data.map((adalaber , index) => {
    return (
    <tr key={index}>
      <td>{adalaber.name}</td>
      <td>{adalaber.counselor}</td>
      <td>{adalaber.speciality}</td>
    </tr>
    );
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleChangeName = (ev) => {
    setName(ev.currentTarget.value);
  };

  const handleChangeCounselor = (ev) => {
    setCounselor(ev.currentTarget.value);
  };

  const handleChangeSpeciality = (ev) => {
    setSpeciality(ev.currentTarget.value);
  };

  const handleClickBtn = (ev) => {
    ev.preventDefault();
    const newAdalaber = {
      name: name,
      counselor: counselor,
      speciality: speciality
    };
    setData([...data, newAdalaber]);
    setName('');
    setCounselor('');
    setSpeciality('');
  };




  //Usar useEffect
  // useEffect(() => {
  //   // Dentro de useEffect llamamos al API
  //   callToApi().then(response => {
  //     // Cuando el API responde guardamos los datos en el estado para que se re-renderice el componente
  //     setStarWarsData(response);
  //   });
  //   // Aquí ponemos un array vacío porque queremos que se llame al API solo la primera vez
  // }, []);

  return (
    <div>
      <h1>Adalabers</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {renderList}
        </tbody>
      </table>
      <h2>Añadir una Adalaber</h2>
<form action="#" onSubmit={handleSubmit}>
    <label htmlFor="name">Nombre:</label>
    <input type="text" name="name" id="name" onChange={handleChangeName} value={name}></input>
    <label htmlFor="counselor">Tutora:</label>
    <input type="text" name="counselor" id="counselor" onChange={handleChangeCounselor} value={counselor}></input>
    <label htmlFor="speciality">Especialidad:</label>
    <input type="text" name="speciality" id="speciality" onChange={handleChangeSpeciality} value={speciality}></input>
    <input type="submit" value="Añadir una nueva Adalaber" onClick={handleClickBtn}></input>
</form>
    </div>
  );
}// Para usar useEffect y useState

export default App;
