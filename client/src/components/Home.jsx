import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    picture: "",
  });

  // Fetch data from the API endpoint
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => {
        const { gender, name, phone, picture } = response.data.results[0];
        setUserData({
          firstName: name.first,
          lastName: name.last,
          gender: gender,
          phoneNumber: phone,
          picture: picture.large,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#]">
      <div className="flex justify-center items-center p-4 gap-[1rem] shadow-lg tranparent h-[30%] bg-[#F0F8FF] rounded-lg">
        <div className="img object-cover flex items-center justify-center ">
          <img className="rounded" src={userData.picture} alt="" />
        </div>
        <div className="content uppercase p-4 gap-[0.5rem] flex justify-center flex-col ">
          <p>FirstName: {userData.firstName}</p>
          <p> LastName: {userData.lastName} </p>
          <p>Gender: {userData.gender}</p>
          <p>Phone: {userData.phoneNumber}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
