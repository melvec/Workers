
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import {
   TableContainer,
   Table,
   TableHead,
   TableBody,
   TableRow,
   TableCell,
   Paper,
   Button,
 } from "@mui/material";
 import data from "./products.json";


const JobMatches = () =>{

    const {id} = useParams();
    const [matches, setMatches] = useState({} );

    useEffect(() => {
        axios(`https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches`).then(({ data }) => {
           if (data) {
              setMatches(data);
           } else {
              window.alert('Theres no matches for this user');
           }
        });
        return setMatches({});
     }, []);
    
console.log( matches);

    return (
        <>
        
        <div>
         

      {
         matches.map((match)=> (
            <div>
          
            <TableCell>{match.jobId}</TableCell>
            </div>
             ))
            
      }
    </div>
 


    
        

    </>
    )
};

export default JobMatches;


