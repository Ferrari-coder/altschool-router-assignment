import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./navbar.css"

function User() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUsers(params.page);
  }, [params.page]);

  console.log(params.page);

  const getUsers = async (val) => {
    setLoading(true);
    const api = await fetch(
      //We use the params.page that we defined in the app.js to check whatever page
      //the user is navigating to
      `https://randomuser.me/api/?page=${val}&results=12&seed=abc`
    );
    const data = await api.json();
    setUsers(data?.results);
    setLoading(false);
  };
  console.log(users);
  //function to update page when a number is clicked
  const updatePage = (val) => {
    navigate(`/users/page/${val}`);
    getUsers(val);
  };
  //function to add to the current page index
  const addPage = (val) => {
    navigate(`/users/page/${val + 1}`);
    getUsers(val + 1);
  };

  //function to remove from the current page index
  const subPage = (val) => {
    if (val > 1) {
      navigate(`/users/page/${val - 1}`);
      getUsers(val - 1);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  console.log(users);
  return (
    <div>
      <h1 className="user_header"> All Users.</h1>
      <div className="container">
        <ul className="card_container">
          {users?.map((user, i) => (
            <li key={i} className="user_card">
              <div className="image-container">
              <img src={user.picture.medium} alt="" className="user_picture" />
              </div>
              <div>
                <h5 className="username">
                  Name:<span  className="no1">{user.name.title} {user.name.first} {user.name.last}</span>
                </h5>
                <h5 className="user_gender">Gender:<span>{user.gender}</span></h5>
                <h5 className="user_email">Email:<span className="no2">{user.email}</span></h5>
                <h5 className="user_phone">Phone:<span className="no3">{user.phone}</span></h5>
                <h5 className="user_age">Age:<span className="no4">{user.dob.age}</span></h5>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="pagination_con">
        {/* create prev button */}
        <button onClick={() => subPage(+params.page)} className="prev">
          Previous
        </button>
        {/* Start a loop to create ten buttons  */}
        {[...Array(Math.round(users?.length + +params.page))].map((_, i) =>
          //display 1 - 10 initially and for numbers 1 - 5
          +params.page < 6 && i < 10 ? (
            <button
              key={i}
              onClick={() => updatePage(i + 1)}
              className="page_numbers"
              
            >
              {i + 1}
            </button>
          ) : (
            // makes sure to shift the buttons to always display 10 per page no
            //matter the index
            i >= +params.page - 6 &&
            i + 6 < +params.page + 10 && (
              <button key={i} onClick={() => updatePage(i + 1)}>
                {i + 1}
              </button>
            )
          )
        )}
        {/* create next button */}
        <button onClick={() => addPage(+params.page)} className="next">
          Next
        </button>
      </div>
    </div>
  );
}

export default User;
