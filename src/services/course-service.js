import axios from 'axios';
const API = `https://wbdv-generic-server.herokuapp.com/api/001040845/courses`;

export default class {

    static createCourse = async course => {
        const response = await axios.post(API, course);
    }

    static findAllCourses = async () => {
        const response = await axios.get(API);
        return response.data;
    }

    static findCourseById = async id => {
        const response = await axios.get(`${API}/${id}`);
        return response.data;
    }

    static updateCourse = async (id, course) => {
        const response = await axios.put(`${API}/${id}`, course);
        return response.status;
    }

    static deleteCourse = async id => {
        const response = await axios.delete(`${API}/${id}`);
        return response.status;
    }
}