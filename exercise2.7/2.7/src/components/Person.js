import React from "react";

function Person({ person }) {
  return (
    <p key={person.id}>
      {person.name}
    </p>
  );
}

export default Person;