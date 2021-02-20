import CourseManager from './components/CourseManager';
import Header from "./components/Header";
import CourseEditor from './components/course-editor/course-editor';
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="container-fluid">
                <Switch>
                    <Route path="/courses" render={props => <CourseManager {...props}/>} />
                    <Route path="/editor" exact={true} render={props => <CourseEditor {...props}/>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
