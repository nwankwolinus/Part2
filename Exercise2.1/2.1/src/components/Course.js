import React from 'react'
import Header from './Header';
import Content from './Content';

const Course = ({course}) => {
    return (
        <div><Header course={course}/>
        <br/>
        <Content parts={course.parts}/>
        </div>
    )
}

export default Course;
