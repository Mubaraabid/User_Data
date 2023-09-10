import { useState } from "react";
import { toast } from "react-toastify";

const Create = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone:""
  });
  const handleOnChange = (e) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  const handleCreateUser = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({
      id: Math.random(),
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
    localStorage.setItem("users", JSON.stringify(users));

    // axios
    //   .post("http//:localhost:3301/user", data)
    //   .then((res) => toast.success(res.data.message))
    //   .catch((err) => console.log(err));
    setData({
      name: "",
      email: "",
      phone:"",
    });
    toast.success("User Created Successfully");
  };

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
        onChange={handleOnChange}
      />
      <br />
      <br />
      <button onClick={handleCreateUser}>Create</button>
    </form>
   
  );
};

export default Create;
