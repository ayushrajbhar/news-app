import React from 'react'

const Navbar = () => {
        let emptyUrl = ""
        return (
            <nav className="navbar navbar-expand-lg shadow-sm py-0" style={{ backgroundColor: "#EF0107" }}>
                <div className="container-fluid">
                    {/* <a className="navbar-brand text-white" href={emptyUrl}><img className="navbar-brand text-white" src={require("./android-chrome-512x512.png")} alt="" /></a> */}
                    <img className="navbar-brand text-white" style={{ height: "4rem" }} src={require("./android-chrome-512x512.png")} alt="NewsApp" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                            <li className="nav-item">
                                <a className="nav-link active text-white mx-3" aria-current="page" href={emptyUrl}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white mx-3" aria-current="page" href={emptyUrl}>Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white mx-3" href={emptyUrl}>About</a>
                            </li>
                        </ul>
                        <form className="d-flex search" role="search">
                            <input className="form-control me-2" type="search" placeholder="Type something..." aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
}

export default Navbar
