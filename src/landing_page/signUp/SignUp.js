import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [signUpInfoData, setSignUpInfoData] = React.useState({
    username: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSignUpInfoData({ ...signUpInfoData, [name]: value });
    console.log(signUpInfoData);
  }

  const formHandleData = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log("signUpInfoData", signUpInfoData);
    setSignUpInfoData({
      username: '',
      email: '',
      password: ''

    });

    try {
      const response = await fetch('http://localhost:8000/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpInfoData)
      });

      const data = await response.json();
      console.log("Signup response data:", data);

      if (!response.ok) {
        alert("Signup failed: " + (data?.message || "Unknown error"));
        return;
      }

      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/home');
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed: network error");
    }
  }
  return (
    <>
      <div className='container d-flex flex-column min-vh-100 py-5'>
        <div className='row justify-content-center align-items-center'>
          <h1>Sign Up</h1>
          <div className='container border p-4 bg-light rounded-3  shadow-lg'>
            <form onSubmit={formHandleData}>
              <div className="mb-3">
                <label htmlFor="exampleInputUserName" className="form-label">User name</label>
                <input type="text"
                  className="form-control"
                  id="exampleInputUserName"
                  aria-describedby="userNameHelp"
                  placeholder='Username'
                  name='username'
                  onChange={changeHandler}
                  value={signUpInfoData.username}
                />
                <div id="userNameHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder='UserEmail'
                  name='email'
                  onChange={changeHandler}
                  value={signUpInfoData.email}
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder='UserPassword'
                  name='password'
                  onChange={changeHandler}
                  value={signUpInfoData.password}
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
