import { useNavigate, useParams } from "react-router-dom";

const View = () => {
  const { user_id, id } = useParams();
  const navigate = useNavigate()
  return (
    <>
    <h1>
      Single User : {user_id} {id}
    </h1>
    <button onClick={()=>navigate('/test')}>
        next
    </button>
    </>
  );
};

export default View;
