import AddBlog from "./pages/AddBlog/AddBlog";
import BlogDashboard from "./pages/BlogDashboard/BlogDashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/nav/Nav";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<BlogDashboard />} />
        <Route exact path="/add" element={<AddBlog />} />
      </Routes>
    </BrowserRouter>
  );
}
