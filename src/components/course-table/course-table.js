import React, {useEffect} from 'react';
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

function CourseTable(props) {
    return (
        <div>
            <div className="row list-header">
                <div className="container">
                    <div className="row">
                        <div className="col-8 col-md-4 col-lg-5">Title</div>
                        <div className="d-none d-md-block col-md-2 col-lg-2">Owned By</div>
                        <div className="d-none d-md-block col-md-4 col-lg-3">Last modified by me</div>
                        <div className="col-4 text-center text-md-left col-sm-2 col-md-2 col-lg-2">
                            <Link to="/courses/grid"><i className="fa fa-grip-horizontal mr-4"></i></Link>
                            <i className="fa fa-sort-alpha-down"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row list-content">
                <div className="container">
                    {props.courses.map(row => <CourseRow key={row._id} course={row} reload={props.reload}/>)}
                </div>
            </div>
        </div>
    );
}

export default CourseTable;