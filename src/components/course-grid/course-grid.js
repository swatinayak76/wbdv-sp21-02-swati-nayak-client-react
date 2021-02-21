import React, {useEffect} from 'react';
import CourseCard from "./course-card";
import CourseRow from "../course-table/course-row";
import {Link} from "react-router-dom";

function CourseGrid(props) {
    return (
        <div>
            <div className="row list-header">
                <div className="container">
                    <div className="row">
                        <div className="col-8 col-md-4 col-lg-5">Recent documents</div>
                        <div className="d-none d-md-block col-md-2 col-lg-2">Owned by me</div>
                        <div className="d-none d-md-block col-md-4 col-lg-3"></div>
                        <div className="col-4 text-center text-md-left col-sm-2 col-md-2 col-lg-2">
                            <Link to="/courses/table"><i className="fa fa-list mr-4"></i></Link>
                            <i className="fa fa-sort-alpha-down"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row list-content">
                <div className="container course-grid">
                    {props.courses.map(row => <CourseCard key={row._id} course={row} reload={props.reload}/>)}
                </div>
            </div>
        </div>
    );
}

export default CourseGrid;