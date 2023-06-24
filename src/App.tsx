import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


import './App.css';
import {
  Container

} from '@mui/material';


import JobMatches from './components/JobMatches'
import JobMatchesParent from './components/JobMatchesParent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Container>
      <Routes>
        <Route path="/" element={<JobMatchesParent />} />
 
      </Routes>
    </Container>

    </>
  )
}

export default App
