import React from 'react'
import Part from './Part';

const Content = ({parts}) => {

    return (
        <div>
            <div>
                <Part 
                    part={parts[0]}
                />
                <br/>
            </div>
            <div>
                <Part 
                    part={parts[1]}
                />
                <br/>
            </div>
            <div>
                <Part 
                    part={parts[2]}
                />
            </div>
        </div>
    )
}

export default Content; 
