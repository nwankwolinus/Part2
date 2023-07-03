import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState("")
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
      })
  }, [])
  console.log('render', persons.length, 'persons')

const addPerson = (event) => {
  event.preventDefault()
  const personObject = {
    name: newName,
    number: newNumber,
  }
  personService
  .create(personObject)
  .then(returnedPerson => {
    setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
  })
}

const handlePersonChange = (event) => {
  setNewName(event.target.value)
}

const handleNumberChange = (event) => {
  setNewNumber(event.target.value)
}

const handleFilterChange = (event) => {
  setFilter(event.target.value)
}

const existingPerson = persons.find(
  (person) => person.name.toLowerCase() === newName.toLowerCase()
)

if (existingPerson && existingPerson.number === newNumber) {
  alert(`${newName} is already added to phonebook`)
  setNewName("")
  setNewNumber("")
  return
}

const toggleDelete = (id) => {
  if (window.confirm(`Do you really want to delete this person`)) {
    personService
      .remove(id)
      .then(() => {
        setSuccessMessage(`Deleted ${persons.find((person) => person.id === id).name}`)
        setPersons(persons.filter((person) => person.id !== id))
        setTimeout(() => {
          setSuccessMessage(null)
        }, 3000)
      })
      .catch((err) => alert(err))
  } else {
    return
  }
}

  // Change number for exiting person in database
  if (existingPerson && existingPerson.number !== newNumber) {
    if (
      window.confirm(
        `${existingPerson.name} is already added to phonebook, replace the old number with a new one?`
      )
    ) {
      const changedPerson = { ...existingPerson, number: newNumber }
      const id = existingPerson.id

      personService
        .update(id, changedPerson)
        .then((returnedPerson) => {
          setPersons(
            persons.map((person) => (person.id !== id ? person : returnedPerson))
          )
          setNewName("")
          setNewNumber("")
        })
        .catch((err) => {
          if (err.response.data) {
            setErrorMessage(err.response.data.error)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          } 
        })
      return
    } else {
      return
    }
  }
  

return (
  <div>
    <h2>Phonebook</h2>
    <Filter filter={filter} onFilterChange={handleFilterChange} />
    <PersonForm
      onFormSubmit={addPerson}
      onNameChange={handlePersonChange}
      onNumberChange={handleNumberChange}
      nameValue={newName}
      numberValue={newNumber}
    />
    <h2>Numbers</h2>
    <Persons persons={persons} filter={filter} toggleDelete={toggleDelete}  />
  </div>
)
}

export default App