import React , {useState} from 'react';
import './SignUp.css';
import logo from '../../../media/logo.png';

const SignUp = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    is_admin: false,
    joining_date: "",
    dob: "",
  });

  const { name, email, password, phone, address, joining_date, dob } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    // console.log(user, 'user obj signup******')
  }
  
  const onClickRegister = (e) => {
    e.preventDefault();
    console.log('register button clicked')
  }

  return (
    <div>
      <h2
        style={{ margin: "2rem auto 0rem" }}
        className="text-center mb-4 text-primary"
      >
        {" "}
        Register Employee
      </h2>
      <div className="d-flex justify-content-center align-items-center signupform">
        <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white form-width">
          {/* logo of the company */}
          <div
            style={{
              display: "flex",
              height: "110px",
              width: "110px",
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem auto",
              padding: "1rem",
              background: "black",
              borderRadius: "50%",
            }}
          >
            <img src={logo} alt="company blue whistle"></img>
          </div>

          {/* enter employee details here */}
          <form>
            {/* name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                onChange={onChange}
                value={name}
                name="name"
                id="name"
                aria-describedby="name"
              />
            </div>

            {/* email id  */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control border border-primary"
                onChange={onChange}
                value={email}
                name="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            {/* password */}
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control border border-primary"
                onChange={onChange}
                value={password}
                name="password"
                id="exampleInputPassword1"
              />
            </div>

            {/* phone */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                onChange={onChange}
                value={phone}
                name="phone"
                id="phone"
              />
            </div>

            {/* joining date */}
            <div className="mb-3">
              <label htmlFor="joiningDate" className="form-label">
                Joining Date
              </label>
              <input
                placeholder="(yyyy-mm-dd) format only"
                type="date"
                className="form-control border border-primary"
                onChange={onChange}
                value={joining_date}
                name="joining_date"
                id="joiningDate"
                aria-describedby="joiningDate"
              />
            </div>

            {/* address */}
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control border border-primary"
                onChange={onChange}
                value={address}
                name="address"
                id="address"
                aria-describedby="address"
              />
            </div>

            {/* dob */}
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date Of Birth
              </label>
              <input
                placeholder="(yyyy-mm-dd) format only"
                type="date"
                className="form-control border border-primary"
                onChange={onChange}
                value={dob}
                name="dob"
                id="dob"
                aria-describedby="dob"
              />
            </div>
          </form>
          <div className="d-grid">
            <button
              onClick={(e) => onClickRegister(e)}
              style={{ margin: "2rem auto" }}
              className="btn btn-primary"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp