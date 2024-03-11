// import React, { useEffect } from 'react';
// import { useGetSessionTokenQuery, useGetDataQuery } from '../store/slice/Consent.slice';

// const PatientDataComponent = () => {
//   // Fetch session token
//   const { data: sessionData, error: sessionError, isLoading: sessionLoading } = useGetSessionTokenQuery();
  
//   // Call the useGetDataQuery hook only once when component mounts
//   const { data: fetchData, error: fetchError, isLoading: fetchLoading } = useGetDataQuery({ accessToken: sessionData?.accessToken }, { skip: sessionLoading });

//   return (
//      <div>
//       <h1>Patient Data</h1>
//       {/* Render patient data here */}
//       {fetchData && (
//         <div>
//           <h2>ID: {fetchData.patient.id}</h2>
//           <p>Name: {fetchData.patient.name}</p>
//           {/* Render other patient data fields as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientDataComponent;
