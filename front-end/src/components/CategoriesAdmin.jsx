import React from 'react'
import SeePlansBttn from './SeePlansBttn';
import RegisterAgentsBttn from './RegisterAgentsBttn';

function CategoriesAdmin() {
    return (
        <section className='categories'>
            <h1 className='categories__titulo'>Categories Admin</h1>
            <SeePlansBttn />
            &nbsp;
            <RegisterAgentsBttn />
        </section>
    )
}

export default CategoriesAdmin;