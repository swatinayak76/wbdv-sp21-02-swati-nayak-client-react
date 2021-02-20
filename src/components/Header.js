import {Link} from "react-router-dom";
import React from "react";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/courses/table">Course Manager</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/courses/table" className="nav-link">
                            Table view
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/courses/grid" className="nav-link">
                            Grid view
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/editor" className="nav-link">
                            Editor
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;