import React from 'react'
import Content from './Content';
import Total from './Total';
import Header from './Header';

const Course = ({courses}) => {
    return (
        <div>
        <Header course={courses}/>
        <Content course={courses}/>
        <Total course={courses}/>
        </div>
    )
}

export default Course;
