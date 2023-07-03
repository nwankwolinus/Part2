import React from "react";

function Person({ person }) {
  return (
    <p key={person.id}>
      {person.name} {person.number}
    </p>
  );
}

export default Person;