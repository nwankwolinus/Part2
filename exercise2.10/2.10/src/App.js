import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1245685', id: 1 },
    { name: 'Ada Mba', number: '39-44-5323523', id: 2 },
    { name: 'Dan Oke', number: '12-43-234345', id: 3 },
    { name: 'Mary Fred', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState("")

const addPerson = (event) => {
  event.preventDefault()
  const personObject = {
    name: newName,
    number: newNumber,
    id: persons.length + 1,
  }
  setPersons(persons.concat(personObject))
  setNewName('')
  setNewNumber('')
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