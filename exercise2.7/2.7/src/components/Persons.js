import React from "react";
import Person from "./Person";

function Persons({persons, filter}) {
    return (
        <div>
        {persons
            .map((person) => (
            <Person
                key = {person.id}
                person={person}
            />
            ))}
        </div>
    );
}   

export default Persons;