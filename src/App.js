import CourseManager from './components/CourseManager';
import Header from "./components/Header";
import CourseEditor from './components/course-editor/course-editor';
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
                <Switch>
                    <Route path="/courses" render={props => <CourseManager {...props}/>} />
                    <Route path="/editor" exact={true} render={props => <CourseEditor {...props}/>}/>
                </Switch>
        </BrowserRouter>
    );
}

export default App;
