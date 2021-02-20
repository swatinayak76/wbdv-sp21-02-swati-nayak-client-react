import React, {useEffect} from 'react';
import CourseRow from "./course-row";

function CourseTable(props) {
    return (
        <div className="course-table">
            <div className="table-responsive">
            <table className="table table-striped w-100">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Owned by</th>
                    <th>Last modified</th>
                </tr>
                </thead>
                <tbody>
                    {props.courses.map(row => <CourseRow key={row._id} course={row} reload={props.reload} />)}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default CourseTable;