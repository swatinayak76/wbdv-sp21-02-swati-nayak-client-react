import React, {useEffect} from 'react';
import CourseCard from "./course-card";
import CourseRow from "../course-table/course-row";

function CourseGrid(props) {
    return (
        <div className="course-grid">
            {props.courses.map(row => <CourseCard key={row._id} course={row} reload={props.reload} />)}
        </div>
    );
}

export default CourseGrid;