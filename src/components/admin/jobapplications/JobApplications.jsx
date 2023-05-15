import React ,{useEffect , useState} from 'react';
import './JobApplications.css';

import { collection, onSnapshot , orderBy, query } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';


const JobApplications = () => {

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const applicationRef = collection(db, "JobApplications");
    const q = query(applicationRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      console.log(snapshot.docs)
      const applications = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setApplications(applications);
      console.log(applications)
    })
  }, [])
  
  const viewResume = (application) => {
    window.open(application.Resume)
    console.log(application)
  }

  return (
    <div style={{ minHeight: "50vh",padding:"40px 0px" }}>
      {console.log(applications)}
      <h1 style={{ textAlign: "center" }}>Job Applications</h1>
      <div>
        {applications.length === 0 ? (
          <p style={{ textAlign: "center" }}>No Applications Found</p>
        ) : (
          <div style={{justifyContent:"center"}} className="row">
            {applications.map((application) => (
              <div
                key={application.id}
                style={{ padding: "20px", margin: "20px" }}
                className="card col-md-4 job-application-card"
              >
                {console.log(application)}
                <h4>
                  {" "}
                  <span>Name</span> :
                  {application.FirstName + " " + application.LastName}
                </h4>
                <p>
                  {" "}
                  <span>Position Applied For</span>: {application.Position}
                </p>
                <p>
                  {" "}
                  <span>Phone</span> :{application.Phone}
                </p>
                <p>
                  {" "}
                  <span>Message</span> :{application.Message}
                </p>
                <button
                  style={{margin:"4px"}}
                  className="btn btn-primary"
                  onClick={() => viewResume(application)}
                >
                  View Resume
                </button>
                <p>
                  <span>Applied On</span> :{" "}
                  {application.createdAt.toDate().toDateString()}
                </p>
                {/* <p> Resume :{application.Resume}</p> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default JobApplications