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
        <Total course={course} parts={course.parts} exercises={course.parts.exercises}/>
        </div>
    )
}

export default Course;
