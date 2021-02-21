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
        if (title.length > 0) {
            await service.createCourse({title: title});
            document.getElementById('txt-title').value = ``;
            reloadCourses();
        }
    }

    const reloadCourses = async () => {
        const data = await service.findAllCourses();
        setCourses(data);
    }

    return (
        <div className="container-fluid course-list">
            <div className="row header">
                <div className="col-1 col-md-1 text-center bars">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="d-none d-md-block col-md-3 col-lg-2  text-course-manager">
                    <p className="m-0">Course Manager</p>
                </div>
                <div className="col-8 col-md-6 col-lg-7">
                    <input type="text" id="txt-title" className="form-control txt-title"
                           placeholder="New Course Title"/>
                </div>
                <div className="col-2 col-md-2">
                    <div className="plus-btn mx-auto bg-danger">
                        <i className="fa fa-plus" onClick={handleSave}></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Route path="/courses/table" exact={true}>
                        <CourseTable courses={courses} reload={reloadCourses}/>
                    </Route>
                    <Route path="/courses/grid" exact={true}>
                        <CourseGrid courses={courses} reload={reloadCourses}/>
                    </Route>
                </div>
            </div>

            <div className="plus-btn mx-auto fixed-btn bg-danger">
                <i className="fa fa-plus" onClick={handleSave}></i>
            </div>
        </div>
    );
}

export default CourseManager;
