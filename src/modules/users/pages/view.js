import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"

const View = () => {
  const { user_id } = useParams();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone:"",
  });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex((ele) => ele.id == user_id);
    if (userIndex !== -1) {
      setData(users[userIndex]);
    } else {
      toast.error("User not found");
    }
  }, [user_id]);
  const navigate = useNavigate()

  return (
    <div>
      
        <p><b>Name:</b> {data.name}</p>
        <p><b>Email:</b> {data.email}</p>
        <p><b>Phone:</b> {data.phone}</p>
        <button onClick={()=>navigate(-1)}>Back</button>
      
    </div>
    // <form>
    //   <label>Name:</label>
    //   <br />
    //   <input type='text' name='name' readOnly={true} value={data.name} />
    //   <br />
    //   <label>Email:</label>
    //   <br />
    //   <input type='text' name='email' readOnly={true} value={data.email} />
    //   <br />
    //   <label>Phone:</label>
    //   <br />
    //   <input type='number' name='email' readOnly={true} value={data.phone} />
    //   <br />
    // </form>
  );
};

export default View;
