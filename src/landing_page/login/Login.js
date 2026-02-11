import React from 'react'

export default function Login() {
    const [loginInfoData, setLoginInfoData] = React.useState({
        email: '',
        password: ''
    });
    const loginChangeHandler = (e) => {
        const { name, value } = e.target;
        setLoginInfoData({ ...loginInfoData, [name]: value });
        console.log(loginInfoData);
    }

    const loginFormHandleData = async (e) => {
        e.preventDefault();
        console.log("form submitted");
        console.log("loginInfoData", loginInfoData);
        setLoginInfoData({
            email: '',
            password: ''
        });
        try{
            const response = await fetch('http://localhost:8000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfoData)
            })
            const data = await response.json();
            console.log("Login response:", data);
            if (response.ok) {
                alert("Login successful!");
                localStorage.setItem("user", JSON.stringify(data.user));
                // Redirect or update UI as needed
                window.location.href = '/home'; // Example redirect to home page
            }else{
                alert("Login failed: " + data.message);
            }
        }
        catch(error){
            console.error("Error during login:", error);
        }
    }
    return (
        <>
            <div className='container d-flex flex-column min-vh-100 py-5'>
                <div className='row justify-content-center align-items-center'>
                    <h1>Log In</h1>
                    <div className='container border p-4 bg-light rounded-3  shadow-lg'>
                        <form onSubmit={loginFormHandleData}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder='UserEmail'
                                    name='email'
                                    onChange={loginChangeHandler}
                                    value={loginInfoData.email}
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
                                    onChange={loginChangeHandler}
                                    value={loginInfoData.password}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
