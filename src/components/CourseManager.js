import React, {useState, useEffect} from 'react';
import service from '../services/course-service';
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import {Route, Link, Switch} from "react-router-dom";

function CourseManager() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        reloadCourses();
    }, []);

    const handleSave = async e => {
        let title = document.getElementById('txt-title').value;
        if(title.length > 0) {
            await service.createCourse({ title: title });
            document.getElementById('txt-title').value = ``;
            reloadCourses();
        }
    }

    const reloadCourses = async () => {
        const data = await service.findAllCourses();
        setCourses(data);
    }

    return (
        <div className="container-fluid">
            <div className="row mt-30">
                <div className="col-5">
                    <span className="h3">Course Manager</span>
                </div>
                <div className="col-5 text-right">
                    <input type="text" id="txt-title" placeholder="Title..." className="form-control" />
                </div>
                <div className="col-2 text-right">
                    <button className="btn btn-primary" onClick={handleSave}>
                        <i className="fa fa-plus-circle mr-2"></i>Add New
                    </button>
                </div>
            </div>
            <div className="row mt-20">
                <div className="col">
                    <span className="h5">Recent Documents</span>
                </div>
                <div className="col">
                    <span className="h5">Owned by me</span>
                </div>
                <div className="col text-right fa-icons">
                    <Link to="/courses/table">
                        <i className="fa fa-tasks" />
                    </Link>
                    <Link to="/courses/grid">
                        <i className="fa fa-folder" />
                    </Link>
                </div>
            </div>
            <div className="row mt-20">
                <div className="col">
                    <Route path="/courses/table" exact={true}>
                        <CourseTable courses={courses} reload={reloadCourses} />
                    </Route>
                    <Route path="/courses/grid" exact={true}>
                        <CourseGrid courses={courses} reload={reloadCourses} />
                    </Route>
                </div>
            </div>
        </div>
    );
}

export default CourseManager;
