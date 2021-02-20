import React, {useEffect, useState} from 'react';
import courseService from '../../services/course-service';

function CourseRow(props) {

    const [editingId, setEditingId] = useState(null);
    const [title, setTitle] = useState('');

    const handleSave = async course => {
        const obj = {
            ...course,
            title: title
        }
        const status = await courseService.updateCourse(editingId, obj);
        if(status === 200) {
            setEditingId(null);
            props.reload();
        }
    }

    const handleDelete = async id => {
        if(window.confirm(`Are you sure you want to delete?`)) {
            const status = await courseService.deleteCourse(id);
            if (status === 200) {
                props.reload();
            }
        }
    }

    return (
        <tr className="course-row">
            <td>
                {!editingId && props.course.title}
                {editingId && <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title} />}
            </td>
            <td>{props.course._nuid === "001040845" ? "Me" : ""}</td>
            <td>{props.course._updatedAt}</td>
            <td className="text-right">
                {!editingId && <i className="fa fa-edit" title="Edit" onClick={e => {setTitle(props.course.title); setEditingId(props.course._id)}}></i>}
                {editingId && <i className="fa fa-check green" title="Save" onClick={e => handleSave(props.course)}></i>}
                <i className="fa fa-times red" title="Delete" onClick={e =>handleDelete(props.course._id)}></i>
            </td>
        </tr>
    );
}

export default CourseRow;