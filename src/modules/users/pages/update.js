import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const { user_id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone:"",
  });
  const handleOnChange = (e) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  const handleUpdateUser = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex((ele) => ele.id == user_id);
    if (userIndex !== -1) {
      users[userIndex] = data;
    } else {
      toast.error("User not found");
    }
    // users.push({
    //   name: data.name,
    //   email: data.email,
    // });
    localStorage.setItem("users", JSON.stringify(users));
    setData({
      name: "",
      email: "",
      phone:"",
    });

    toast.success("User Updated Successfully");
    navigate("/user/index");
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex((ele) => ele.id == user_id);
    if (userIndex !== -1) {
      setData(users[userIndex]);
    } else {
      toast.error("User not found");
    }
  }, [user_id]);

  return (
    <form>
      <label>Name:</label>
      <br />
      <input
        type='text'
        name='name'
        value={data.name}
        onChange={handleOnChange}
      />
      <br />
      <label>Email:</label>
      <br />
      <input
        type='text'
        name='email'
        value={data.email}
        onChange={handleOnChange}
      />
        <br />
      <label>Phone:</label>
      <br />
      <input
        type='text'
        name='phone'
        value={data.phone}
        
       />
      <br />
      <button onClick={handleUpdateUser}>Update</button>
    </form>
  );
};

export default Update;
