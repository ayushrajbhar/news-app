import React from 'react'
import {
    Link
} from "react-router-dom";

const Categories = ()=> {
        return (
            <>
            <div className="container categories my-3">
                <h5>Categories</h5>
                <div className='container d-flex p-0 flex-wrap justify-content-start'>
                    <Link className='btn btn-light' to="/">General</Link>
                    <Link className='btn btn-light' to="/business">Business</Link>
                    <Link className='btn btn-light' to="/entertainment">Entertainment</Link>
                    <Link className='btn btn-light' to="/health">Health</Link>
                    <Link className='btn btn-light' to="/science">Science</Link>
                    <Link className='btn btn-light' to="/sports">Sports</Link>
                    <Link className='btn btn-light' to="/technology">Technology</Link>
                </div>
                </div>
            </>
        )
}

export default Categories
