import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // إعداد Realtime Database
      const db = getDatabase();

      // حفظ بيانات المستخدم
      await set(ref(db, "users/" + user.uid), {
        email: user.email,
        uid: user.uid,
        // أضف أي بيانات إضافية تريد تخزينها
      });

      console.log("User registered and data saved:", user);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className=" bg-slate-100 "
        style={{
          width: "80%",
          height: "80%",
          marginTop: "20px",
          padding: "17px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSignUp}>
          <MDBInput
            className="mb-4"
            type="email"
            id="form2Example1"
            label="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form2Example2"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <MDBRow className="mb-4">
            <MDBCol className="d-flex justify-content-center">
              <MDBCheckbox
                id="form2Example3"
                label="Remember me"
                defaultChecked
              />
            </MDBCol>
            <MDBCol>
              <a href="#!">Forgot password?</a>
            </MDBCol>
          </MDBRow>

          <MDBBtn
            type="submit"
            className="mb-4"
            block
            onClick={() => {
              setPassword("");
              setEmail("");
            }}
          >
            Sign in
          </MDBBtn>

          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>

            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="google" />
            </MDBBtn>

            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
