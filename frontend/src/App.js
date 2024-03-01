import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fixed import statement
import NavigationBar from "./screen/navigation-bar";
import Message from "./admin/CreateMessage";
import CreateChild from "./component/CreateChild";
import ListParents from "./component/ListParents";
import ListChildren from "./component/ListChildren";
import Login from "./component/Login";
import HomePage from "./component/HomePage";
import Signup from "./component/Signup";
import ListFeedbacks from "./admin/ListFeedbacks";

function App() {
    return (
        <div className="App">
            <Router> {/* Wrap your routes with Router */}
                <Routes> {/* Use Routes instead of routes */}
                    <Route path="/screen/navigation-bar" element={<NavigationBar />} />
                    <Route path="/admin/Message" element={<Message/>} />
                    <Route path="/admin/feedbacks" element={<ListFeedbacks/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/signUp" element={<Signup/>} />
                    <Route path="/admin/createChild" element={<CreateChild/>} />
                    <Route path="/userslist" element={<ListParents/>} />
                    <Route path="/components/ChildrenForEachParent" element={<ListChildren/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
