// import React, { useEffect } from 'react';
// import { useGetSessionTokenQuery, useGetDataQuery, useConsentRequestQuery } from '../store/slice/Patient.slice';

// const PatientDataComponent = () => {
//   // Fetch session token
//   const { data: sessionData, error: sessionError, isLoading: sessionLoading } = useGetSessionTokenQuery();
  
//   // Call the useGetDataQuery hook only once when component mounts
//   const { data: fetchData, error: fetchError, isLoading: fetchLoading } = useConsentRequestQuery({ accessToken: sessionData?.accessToken }, { skip: sessionLoading });

//   console.log(sessionData?.data)

//   return (
//      <div>
//       <h1>Patient Data</h1>
//       {/* {fetchData && (
//         <div>
//           <h2>ID: {fetchData.patient.id}</h2>
//           <p>Name: {fetchData.patient.name}</p>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default PatientDataComponent;
