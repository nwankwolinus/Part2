import React from 'react'

const Total = ({course}) => {


  const sum = course.parts.reduce(
    (sum, part) => {
      return sum + part.exercises;
    }, 0
      // initial value for accumulator
  );
  return <h4>Total of {sum} exercises</h4>
};




export default Total;