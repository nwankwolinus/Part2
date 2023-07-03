import React from "react";

function Person({ person }) {
  return (
    <p key={person.name}>
      {person.name}
    </p>
  );
}

export default Person;