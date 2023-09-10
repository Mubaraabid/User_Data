import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Index = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

   const deleteUser = (idToDelete) => {
    
    const updatedUsers = data.filter((user) => user.id !== idToDelete);
    setData(updatedUsers);
    toast.success("User Deleted Successfully");
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setData(users);
  }, []);
 

  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {data.map((ele) => (
          <tr>
            <td>{ele.name}</td>
            <td>{ele.email}</td>
            <td>
              <button onClick={() => deleteUser(ele.id)}>
                Delete
              </button>
            </td>
            <td>
              <button onClick={() => navigate("/user/view/"+ele.id)}>
                View
              </button>
            </td>
            <td>
              <button onClick={() => navigate("/user/update/" + ele.id)}>
                Edit
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Index;
