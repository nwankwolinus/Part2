import React from 'react'

const Total = ({course, parts}) => {


const initialValue = 0

parts.forEach(part => {

  parts.totalExercises = course.parts.reduce(
    (accumulator, part) => accumulator + part.exercises,
    initialValue  // initial value for accumulator
  );
});

console.log(parts.totalExercises);
return (
    <p>total of {parts.totalExercises} exercises</p>
  );
}


export default Total;