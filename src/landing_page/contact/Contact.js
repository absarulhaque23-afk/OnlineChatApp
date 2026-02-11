import React from 'react';



export default function Contact() {
    // const [userData, setUserData] = useState([]);

    // useEffect((response) => {
    //     axios.get("/api/user")
    //         .then((response) => {
    //             setUserData(response.data);
    //             console.log(setUserData);
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [data]);

    return (
        <div className='container d-flex flex-column min-vh-100 py-5'>
            <div className='row'>
                <h1>Total Contact List</h1>
                {/* <h3>users = {userData.length}</h3>
                <ul>
                    {
                        userData.map((value, index) => (
                            <div>
                                <li key={index}>
                                    ID : {value.id},
                                    Name: {value.first_name} {value.last_name},
                                    Email: {value.email}
                                    Gender: {value.gender}
                                </li>
                            </div>
                        ))
                    }
                </ul> */}
            </div>
        </div>
    )
}
