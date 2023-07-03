import React from 'react'
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({course}) => {
    return (
        <div><Header course={course}/>
        <br/>
        <Content parts={course.parts}/>
        <br/>
        <Total sum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
        </div>
    )
}

export default Course;
