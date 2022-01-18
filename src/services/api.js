// Fichero src/services/api.js
const callToApi = () => {
    // Llamamos al API
    return fetch('https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json')
      .then(response => response.json())
      .then(response => {
        // Cuando responde el API podemos limpiar los datos aquí
        const result = {
          name: response.results.name,
          counselor: response.results.counselor,
          speciality: response.results.speciality
        };
        return result;
      });
  };
  
  export default callToApi;