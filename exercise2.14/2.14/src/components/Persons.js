import React from "react";
import Person from "./Person";

function Persons({persons, filter, toggleDelete}) {
    return (
        <div>
        {persons
            .filter((person) =>
            person.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((filteredPerson) => (
            <Person
                key = {filteredPerson.id}
                person={filteredPerson}
                toggleDelete={toggleDelete}
            />
            ))}
        </div>
    );
}   

export default Persons;