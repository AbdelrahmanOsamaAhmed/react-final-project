import { useHistory } from "react-router-dom";

export default function Home() {
  let history = useHistory();
  let signInFunction = () => {
    history.push("/login");
  };
  let signUpFunction = () => {
    history.push("signup");
  };
  return (
    <>
      <div className=" d-flex align-items-center  justify-content-center" style={{width: "100%", height:"100vh"}}>
        <button className="btn btn-primary" style={{marginRight: "20px"}} onClick={signInFunction}>
          Log in
        </button>
        <button className="btn btn-primary" onClick={signUpFunction}>
          Sign Up
        </button>
      </div>
    </>
  );
}
