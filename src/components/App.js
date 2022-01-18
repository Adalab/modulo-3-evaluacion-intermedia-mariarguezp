import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  const [name, setName] = useState('');
  const [counselor, setCounselor] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [data, setData] = useState([]);


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

  useEffect(() => {
    callToApi().then(response => {
      setData(response);
    });
  }, []);

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
}

export default App;
