import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import BtnsLogin from "../../components/btnsLogin/BtnsLogin";
import TextInput from "../../components/inputs/textInput/TextInput";
import NavHomeSpacer from "../../components/navHomeSpacer/NavHomeSpacer";
import { auth } from "../../data/firebaseConfig";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && navigate("/reaction-form");
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "ww@wp.pl",
      password: "wwwwww",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Podaj email").required("Email wymagany"),
      password: Yup.string().required("Hasło wymagane"),
    }),
    onSubmit: values => {
      const { email, password } = values;
      signInWithEmailAndPassword(auth, email, password)
        .then(() => navigate("/reaction-form"))
        .catch(error => alert("PP"));
    },
  });

  return (
    <>
      <main className="wrapper login">
      <NavHomeSpacer/>
        <div className="login__opacity">
          <form onSubmit={formik.handleSubmit} className="loginForm">
            <h2 className="loginForm__title">Zaloguj się</h2>

            <TextInput
              type={"text"}
              name={"email"}
              value={formik.values.email}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label={"Email"}
              placeholder={"Email"}
              containerClass={"loginForm__inputContainer"}
              labelClass={"loginForm__label"}
              inputClass={"loginForm__input"}
            />
            <div className="loginForm__error">
              {formik.touched.email && formik.errors.email && (
                <small>{formik.errors.email}</small>
              )}
            </div>

            <TextInput
              type={"password"}
              name={"password"}
              value={formik.values.password}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label={"Hasło"}
              placeholder={"Hasło"}
              containerClass={"loginForm__inputContainer"}
              labelClass={"loginForm__label"}
              inputClass={"loginForm__input"}
            />

            <div className="loginForm__error">
              {formik.touched.password && formik.errors.password && (
                <small>{formik.errors.password}</small>
              )}
            </div>

            <BtnsLogin
              link={"/register"}
              textRight="Zaloguj się"
              textLeft="Załóż konto"
            />
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
