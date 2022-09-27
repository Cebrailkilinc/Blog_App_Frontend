
import Navi from './Components/Navi';
import Login from './Pages/Login';
import PostDetail from './Pages/PostDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './Pages/Register';
import { BlogProvider } from './Context/BlogContext';
import UserPage from './Pages/UserPage';
import axios from 'axios';
import Home from './Pages/Home';
import Loading from './Components/Loading';
import Toast from './Components/Toast';
import Footer from './Components/Footer';
import VisitPage from './Pages/VisitPage';
import UserSetting from './Pages/UserSetting';


function App() {

  return (   
      <BrowserRouter>
        <BlogProvider>        
          <Navi/>          
          <Routes>
            <Route exact path="/*" element={<Home/>}/>          
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/visit/:userId" element={<VisitPage/>} /> 
            <Route path="/profile/:user_name" element={<UserPage/>} /> 
            <Route path="/setting/:userId" element={<UserSetting/>}/>                     
          </Routes>   
          <Footer/>      
        </BlogProvider>
      </BrowserRouter>

  );
}

export default App;
