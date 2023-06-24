
import {useParams} from 'react-router-dom'


import {

   TableCell,

 } from "@mui/material";



 interface Job {
   jobId: string;
   jobTitle: {
     name: string;
     imageUrl: string;
   };
   company: {
     name: string;
     address: {
       formattedAddress: string;
       zoneId: string;
     };
     reportTo?: {
       name: string;
       phone?: string;
     };
   };
   wagePerHourInCents: number;
   milesToTravel: number;
   shifts: {
     startDate: string;
     endDate: string;
   }[];
   branch: string;
   branchPhoneNumber: string;
   requirements?: string[];
 }

 interface Props {
   jobs: Job[];
 }


 const JobMatches: React.FC<Props> = ({ jobs }) => {
  console.log(jobs);
   return (
     <div>
      

      {jobs.map((job) => (
        <div key={job.jobId}>
          <h2>{job.jobTitle.name}</h2>
          <img src={job.jobTitle.imageUrl} alt={job.jobTitle.name} />
          <p>Company: {job.company.name}</p>
          <p>Address: {job.company.address.formattedAddress}</p>
          <p>Zone ID: {job.company.address.zoneId}</p>
          {job.company.reportTo && (
            <div>
              <p>Report To: {job.company.reportTo.name}</p>
              <p>Phone: {job.company.reportTo.phone}</p>
            </div>
          )}
          <p>Wage per Hour: {job.wagePerHourInCents / 100}</p>
          <p>Miles to Travel: {job.milesToTravel}</p>
          <p>Branch: {job.branch}</p>
          <p>Branch Phone Number: {job.branchPhoneNumber}</p>
          {job.requirements && (
            <div>
              <p>Requirements:</p>
              <ul>
                {job.requirements.map((requirement) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
            </div>
          )}
          <p>Shifts:</p>
          <ul>
            {job.shifts.map((shift, index) => (
              <li key={index}>
                Start Date: {shift.startDate}, End Date: {shift.endDate}
              </li>
            ))}
          </ul>
        </div>
      ))}


     </div>
   );
 };
 
 export default JobMatches;




 


