import Axios from 'axios'


export const GetGDPByCountry = (countryCode, requestDate) => {
    const countryData = {}
    
    Axios.get("http://api.worldbank.org./v2/country/br/indicator/" + countryCode, {
        params: {
            date: requestDate
        }
    })
    .catch(() => 
    {

    })
    .then(response => 
    {
        countryData = response.data
    })
}


export const GetAllCountries = (limit, continentFilter) => {

}

