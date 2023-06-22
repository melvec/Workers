import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


import './App.css';
import {
  Container

} from '@mui/material';


import JobMatches from './components/JobMatches'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Container>
      <Routes>
        <Route path="/" element={<JobMatches />} />
 
      </Routes>
    </Container>

    </>
  )
}

export default App
