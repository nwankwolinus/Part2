import React from 'react'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const Header = ({course}) => {
    return (
      <div><h1>{course.name}</h1></div>
    )
  }

  const Part = ({ part }) => {
    return (
      <div>
        <p>
        {part.name} {part.exercises}
        </p>
      </div>
    );
  };

  const Total = ({course}) => {


    const sum = course.parts.reduce(
      (sum, part) => {
        return sum + part.exercises;
      }, 0
        // initial value for accumulator
    );
    return <h4>Total of {sum} exercises</h4>
  };

  const Content = ({ course }) => {
    return (
    <div>
        {course.parts.map((part) => (
        <Part key={part.id} part={part} />
        ))}
    </div>
    );
};
  
  const Course = ({courses}) => {
  return (
      <div>
      <Header course={courses}/>
      <Content course={courses}/>
      <Total course={courses}/>
      </div>
  )
}

  return (
    <div>
      <Course courses={courses[0]}/>
      <Course courses={courses[1]}/>
    </div>
  )
}

export default App;