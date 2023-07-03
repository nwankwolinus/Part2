import React from "react";

function Person({ person, toggleDelete }) {
  return (
    <p key={person.id}>
      {person.name} {person.number}
      <button onClick ={() => toggleDelete(person.id)}>delete</button>
    </p>
  );
}

export default Person;