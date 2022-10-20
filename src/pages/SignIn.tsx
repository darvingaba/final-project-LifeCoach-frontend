import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { User } from "../App";

type Props = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export function SignIn({ user, setUser }: Props) {
  // const [user, setUser] = useState<null | User>();
  const [errors, setErrors] = useState("");

  const navigate = useNavigate()

  return (
    <div className="signup">
      <div className="signupForm">
        <h2 className="pAccTag">Please sign in!</h2>
        <form
          className="formSignup"
          onSubmit={(e) => {
            e.preventDefault();
            fetch("http://localhost:3456/sign-in", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value,
              }),
            })
              .then((res) => res.json())
              .then((userData) => {
                if (userData.errors) {
                  setErrors(userData.errors);
                } else {
                  setUser(userData.user);
                  localStorage.token = userData.token;
                  navigate("/home");
                }
              });
          }}
        >
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className="signupIn">Sign in</button>

          {errors ? <p className="error">{errors}</p> : <p></p>}
          <p className="pAccTag">Don't have an account? </p>
          <Link className="linkAcc" to={"/signup"}>
            Create account!
          </Link>
        </form>
      </div>
    </div>
  );
}
