import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Payments from "./components/Payments";
import Post from "./components/Post";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="posts" element={<Posts />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Navigate to="profile" />} />
            <Route  path="profile" element={<Profile />} />
            <Route path="payments" element={<Payments />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// store data in url :
// 1. params => /postId => /posts/1
// 2. searchParams (query string) => example.com?type=frontend&cat=free
//? point : query string or the searchParams is optional and adding them to the url would cause no changes...
//------------------------------------------------------------------------------------------------------------------------

//? programmatic navigation :
// 1. useNavigate()            imperative
// 2. Navigate component       imperative

//  Links =>   declarative

//? using replace as the second parameter in the navigate function :
// cart => login => checkout
// home => login(current entry will be replaced by dashboard) => dashboard
// home => dashboard
