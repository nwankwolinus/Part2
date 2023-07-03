import { useState } from 'react'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: parseInt(8067042345), id: 1 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handlePersonChange}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    <Persons key={persons.id} persons={persons}/>
  </div>
)
}

export default App