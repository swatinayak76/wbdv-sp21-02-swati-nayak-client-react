import React, {useEffect} from 'react';
import './editor.css';
import {Link} from "react-router-dom";

function CourseEditor(props) {
    return (
        <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <div className="navbar-brand">
                <Link className="text-light" to="/courses/table"><i
                className="fa fa-times px-3"></i></Link><span className="course">CS5610-WebDev</span></div>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                    data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Build</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Theme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Setting</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-light" href="../home/home.template.client.html"><i
                            className="fa fa-plus"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    <div className="container-fluid ">
        <div className="row full-page-height pb-5 pb-md-0">
            <div className="col-md-3 bg-dark  modules">
                <ul>
                    <li className="module-item"><a href="#">Module1-jquery</a>
                        <div className="delete-module"
                             onClick="return confirm('Are you sure you want to delete the module?');"><i
                            className="fa fa-times"></i></div>
                    </li>
                    <li className="module-item active"><a href="#">Module1-jquery</a>
                        <div className="delete-module"
                             onClick="return confirm('Are you sure you want to delete the module?');"><i
                            className="fa fa-times"></i></div>
                    </li>
                    <li className="module-item"><a href="#">Module1-jquery</a>
                        <div className="delete-module"
                             onClick="return confirm('Are you sure you want to delete the module?');"><i
                            className="fa fa-times"></i></div>
                    </li>
                    <li className="module-item"><a href="#">Module1-jquery</a>
                        <div className="delete-module"
                             onClick="return confirm('Are you sure you want to delete the module?');"><i
                            className="fa fa-times"></i></div>
                    </li>
                    <li className="module-item"><a href="#">Module1-jquery</a>
                        <div className="delete-module"
                             onClick="return confirm('Are you sure you want to delete the module?');"><i
                            className="fa fa-times"></i></div>
                    </li>
                    <li className="module-item"><a href="#">Module1-jquery</a>
                        <div className="delete-module"
                             onClick="return confirm('Are you sure you want to delete the module?');"><i
                            className="fa fa-times"></i></div>
                    </li>
                    <li className="module-item"><a href="#">Module1-jquery</a>
                        <div className="delete-module"
                             onClick="return confirm('Are you sure you want to delete the module?');"><i
                            className="fa fa-times"></i></div>
                    </li>
                    <li className="module-item"><a href="#">Module1-jquery</a>
                        <div className="delete-module"
                             onClick="return confirm('Are you sure you want to delete the module?');"><i
                            className="fa fa-times"></i></div>
                    </li>
                    <li className="module-item bg-transparent"><a href="../index.html">
                        <div className="add-module"><i className="fa fa-plus"></i></div>
                    </a></li>
                </ul>
            </div>
            <div className="col-md-9">
                <div className="row text-center all-topics py-3">
                    <div className="topic-item col-lg-2 col-md-3 col-sm-4"><a href="#">Topic 1</a></div>
                    <div className="topic-item active col-lg-2 col-md-3 col-sm-4"><a href="#">Topic 2</a></div>
                    <div className="topic-item col-lg-2 col-md-3 col-sm-4"><a href="#">Topic 3</a></div>
                    <div className="topic-item col-lg-2 col-md-3 col-sm-4"><a href="#">Topic 4</a></div>
                    <div className="topic-item col-lg-2 col-md-3 col-sm-4"><a href="#">Topic 5</a></div>
                    <div className="topic-item col-2 col-lg-1"><a href="../index.html"><i
                        className="fa fa-plus"></i></a></div>
                </div>
                <div className="row publish-area py-3">
                    <div className="col-12 text-right">
                        <button className="btn btn-success mr-2">Save</button>
                        <label>Preview</label>
                        <label className="switch">
                            <input type="checkbox" />
                                <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="row widgets-area mx-0">
                    <div className="col-md-6 order-2 order-md-1">
                        <h4>Heading Widget</h4>
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <div className="row text-center justify-content-end">
                            <div className=" btn-up bg-warning ml-2">
                                <i className="fas fa-arrow-up"></i>
                            </div>
                            <div className=" btn-down bg-warning ml-2">
                                <i className="fas fa-arrow-down"></i>
                            </div>
                            <select className="form-control custom-select txt-role ml-2" id="role">
                                <option>Heading</option>
                                <option>Paragraph</option>
                            </select>
                            <div className="btn-cross bg-danger ml-2 mr-3"
                                 onClick="return confirm('Are you sure you want to delete the widget?');">
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-2 order-3">
                        <div className="form-group">
                            <input className="form-control" value="heading text" placeholder="heading text" />
                        </div>
                    </div>
                    <div className="col-md-12 order-4">
                        <div className="form-group">
                            <select className="form-control custom-select">
                                <option>Heading 1</option>
                                <option>Heading 2</option>
                                <option>Heading 3</option>
                                <option>Heading 4</option>
                                <option>Heading 5</option>
                                <option>Heading 6</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12 order-5">
                        <div className="form-group">
                            <input className="form-control" placeholder="Widget name" />
                        </div>
                    </div>
                    <div className="col-md-12 preview-text order-6">
                        <p>Preview</p>
                        <h3>Heading Text</h3>
                    </div>
                </div>

            </div>
            <div className="btn-plus bg-danger">
                <i className="fas fa-plus-circle"></i>
            </div>
        </div>
    </div>
        </div>
);
}

export default CourseEditor;