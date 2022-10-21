import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../App";

type Props = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export function SignUp({ user, setUser }: Props) {
  // const [user,setUser] = useState<null | User>()
  const [errors, setErrors] = useState("");
  let navigate = useNavigate();

  return (
    <div className="signup">
      <div className="signupForm">
         <h2 className="pAccTag">Create an account!</h2>
        <form
          className="formSignup"
          onSubmit={(e) => {
            e.preventDefault();
            fetch("http://localhost:3456/sign-up", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                email: e.target.email.value,
                name: e.target.userName.value,
                password: e.target.password.value,
              }),
            })
              .then((res) => res.json())
              .then((userData) => {
                if (userData.error) {
                  setErrors(userData.error);
                } else {
                  setUser(userData.user);
                  localStorage.token = userData.token;
                  navigate("/home");
                }
              });
          }}
        >
          <input type="text" name="userName" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className="signupIn">Sign up</button>
          {errors ? <p className="error">{errors}</p> : <p></p>}
          <p className="pAccTag">Already have an account? </p>
          <Link className="linkAcc" to={"/signin"}>
            Sign in
          </Link>
        </form>
      </div>
    </div>
  );
}
