import React from 'react';
import Student from './student.svg';

function Sidebar()
{
    return(
        <div className="sidebar">
            <img className='student' src={Student}/>
        </div>
    );
}
export default Sidebar;