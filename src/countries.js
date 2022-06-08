'use strict';

const countriesData = 'https://restcountries.com/v3.1/name/';

export const getCountry = async (name) =>
  await fetch(countriesData + name).then((response) => {
    if (!response.ok) {
      throw new Error('Įvyko klaida: ' + response.status);
    }
    return response.json();
  });