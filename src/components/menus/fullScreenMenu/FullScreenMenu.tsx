import React from "react";

export const FullScreenMenu = () => (
    <nav className="full-screen-menu">
        <div className="container">
            <div className="row">
                <div className="col">LOGO</div>
                <div className="col">CLOSE</div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <nav className="nav">
                        <a className="nav-link active" href="#">Active</a>
                        <a className="nav-link" href="#">Link</a>
                        <a className="nav-link" href="#">Link</a>
                        <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                    </nav>
                </div>
            </div>
        </div>
    </nav>
);
