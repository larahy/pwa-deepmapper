import React from 'react'
import {Link} from 'react-router-dom'

const AllExperts = () => (
    <div>
        <ul>
            <Link to={'/experts/1'}>Brenda</Link>
            <Link to={'/experts/2'}>Norman</Link>
        </ul>
    </div>
)

export default AllExperts