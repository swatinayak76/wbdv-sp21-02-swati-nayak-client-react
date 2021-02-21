import React, {useEffect, useState} from 'react';
import courseService from '../../services/course-service';
import {Link} from "react-router-dom";

function CourseRow(props) {

    const [editingId, setEditingId] = useState(null);
    const [title, setTitle] = useState('');

    const handleSave = async course => {
        const obj = {
            ...course,
            title: title
        }
        const status = await courseService.updateCourse(editingId, obj);
        if (status === 200) {
            setEditingId(null);
            props.reload();
        }
    }

    const handleDelete = async id => {
        if (window.confirm(`Are you sure you want to delete?`)) {
            const status = await courseService.deleteCourse(id);
            if (status === 200) {
                props.reload();
            }
        }
    }

    return (
        <div className="row">
            <div className="col-10 col-md-5 col-lg-5">
                {!editingId && <Link to="/editor" className="">
                    <i className="fa fa-book mr-3 text-primary"></i>
                    {props.course.title}
                </Link> }
                {editingId &&
                <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title}/>}
            </div>
            <div className="d-none d-md-block col-md-2 col-lg-2">me</div>
            <div className="d-none d-md-block col-md-4 col-lg-3">{props.course._updatedAt}</div>
            <div className="col-2 text-right col-sm-2 col-md-1 col-lg-2">
                {!editingId && <i className="fa fa-edit mr-4" title="Edit" onClick={e => {
                    setTitle(props.course.title);
                    setEditingId(props.course._id)
                }}></i>}
                {editingId &&
                <i className="fa fa-check mr-4" title="Save" onClick={e => handleSave(props.course)}></i>}
                <i className="fa fa-times mr-4" onClick={e => handleDelete(props.course._id)}></i>
            </div>
        </div>
    );
}

export default CourseRow;