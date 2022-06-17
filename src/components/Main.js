import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import CourseDetail from './CourseDetail'
import Login from './User/Login'
import Register from './User/Register'
import Dashboard from './User/Dashboard'

import {Routes as Switch, Route} from 'react-router-dom';

function Main() {
  return (
    <div>
        <Header />
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:course_id" element={<CourseDetail />} />
            <Route path="/user-login" element={<Login />} />
            <Route path="/user-register" element={<Register />} />
            <Route path="/user-dashboard" element={<Dashboard />} />
        </Switch>
        <Footer />
    </div>
  );
}

export default Main;