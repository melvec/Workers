import React from 'react';
import JobMatches from './JobMatches';
import axios from 'axios'
import data from "./products.json";
import { useEffect, useState } from 'react';


const ParentComponent: React.FC = () => {
    const [jobs, setMatches] = useState();

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

     //console.log(jobs);
  return (
    <div>
      <h1>Jobs</h1>
      <JobMatches jobs={jobs} />
    </div>
  );
};

export default ParentComponent;
