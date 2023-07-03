import React from "react";
import Person from "./Person";

function Persons({ persons}) {
    return (
        <div>
        {persons
            .map((person) => (
            <Person
                key = {person.name}
                person={person}
            />
            ))}
        </div>
    );
}   

export default Persons;