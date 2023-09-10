import { useNavigate } from "react-router-dom"

export const Test=()=>{
    const navigate = useNavigate()

    return<>
    <h1>Test</h1>
    <button onClick={()=>navigate(-1)}>
        Back
    </button>
    </>
}