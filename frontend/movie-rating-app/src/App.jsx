import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import AddReview from './components/AddReview'
import ReviewList from './components/ReviewList'
import EditReview from './components/EditReview'

import './App.css'
function App() {
  return (
    <>
    <BrowserRouter>
    <div className="container mb-2 border">
    <Link to="/" className="btn btn-danger m-2">Home</Link>
    <Link to="/add" className="btn btn-primary m-2">Add Review</Link>
    </div>
    <Routes>
      <Route path="/" element={<ReviewList/>}/>
      <Route path="/edit" element={<EditReview/>}/>
      <Route path="/add" element={<AddReview/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App