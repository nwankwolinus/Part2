import React from 'react'

const Country = ({ country }) => {

const languages = Object.values(country.languages)
const flagUrl = country.flags.png
const capital = country.capital[0]

return (
    <div>
        <h2>{country.name.common}</h2>

        <p>population {country.population}</p>
        <p>capital {capital}</p>

        <h4>languages</h4>

        <ul>
            {languages.map(language => <li key={language}>{language}</li>)}  
        </ul>

        <img src={flagUrl} width='200' alt="flagIcon" />
    </div>
)
}

export default Country;
