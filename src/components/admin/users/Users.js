import React, { useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Users.css";
import UserContext from "../../../context/user/userContext";
import AuthContext from "../../../context/auth/authContext";

const Users = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const authContext = useContext(AuthContext);

  const { users, getAllUsers } = userContext;
  const { isAuthenticated, logged_user, loadUser } = authContext;

  useEffect(() => {
    if (!sessionStorage.token) {
      // console.log("not authorised");
      navigate("/admin/login");
    }
    loadUser();
    getAllUsers();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }} className="">
      {isAuthenticated && logged_user?.is_admin ? (
        <>
          {console.log("admin field", logged_user?.is_admin)}
          <h2
            style={{ margin: "2rem auto 0rem" }}
            className="text-center mb-4 text-primary"
          >
            {" "}
            Employees
          </h2>
          <div>
            {/* all of the users registered will be shown here  */}
            <div className="users-cont">
              {users.map((user) => (
                <div key={user._id}>
                  {/* {console.log(user)} */}
                  <div className="user-card">
                    <Link to={`/admin/UserProfile/${user._id}`}>
                      <h4>{user.name}</h4>
                    </Link>
                    <p>{user.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <h2
          style={{ margin: "2rem auto 0rem" }}
          className="text-center mb-4 text-primary"
        >
          {" "}
          {console.log("admin field", logged_user?.is_admin)}
          You are not authorised to view this page
        </h2>
      )}
    </div>
  );
};

export default Users;
