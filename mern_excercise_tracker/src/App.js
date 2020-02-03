import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ExerciseList from "./components/Exercise_list";
import EditExercise from "./components/Edit_exercise";
import CreateExercise from "./components/Create_exercise";
import CreateUser from "./components/Create_user";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br />
      <Route exact path='/' component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
    
    
  );
}

export default App;
