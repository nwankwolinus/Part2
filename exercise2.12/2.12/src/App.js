import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState("")

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

const addPerson = (event) => {
  event.preventDefault()
  const personObject = {
    name: newName,
    number: newNumber,
  }
  axios
  .post('http://localhost:3001/persons', personObject)
  .then(response => {
      setPersons(persons.concat(response.data))
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
    <Persons persons={persons} filter={filter} />
  </div>
)
}

export default App