import React from 'react'; 


function UserProfile() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log("User Info in NavBar:", userInfo);
    const logOut = () =>{
        console.log(userInfo);
        localStorage.removeItem('userInfo');
        window.location.href = '/login';
    };

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={e => e.preventDefault()}>
                { userInfo ? userInfo.user.username : 'User Profile' }
            </a>
            <ul className="dropdown-menu">
                <li>
                    <button className="dropdown-item" type="button" onClick={logOut}>
                        Log Out
                    </button>
                </li>
                <li><a className="dropdown-item" href="#">Account Settings</a></li>
            </ul>
        </li>
    );
}

export default UserProfile;
