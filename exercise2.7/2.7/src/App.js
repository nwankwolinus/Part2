import { useState } from 'react'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ])
  const [newName, setNewName] = useState('')


const addPerson = (event) => {
  event.preventDefault()
  const personObject = {
    name: newName,
    id: persons.length + 1,
  }
   // Person exists in the database
  setPersons(persons.concat(personObject))
  setNewName('')
}

const handlePersonChange = (event) => {
  setNewName(event.target.value)
}
const existingPerson = persons.find(
  (person) => person.name.toLowerCase() === newName.toLowerCase()
)
if (existingPerson === {newName}) {
  alert(`${newName} is already added to phonebook`)
  setNewName('')
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
        <button type="submit">add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    <Persons key={persons.id} persons={persons}/>
  </div>
)
}

export default App