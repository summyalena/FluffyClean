import React from "react";
import Image from "next/image";
import { FaFacebookF, FaRegEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import styles from '../styles/signup.module.css'
import Img from "../public/vector/default-monochrome.svg";
import { MdLockOutline } from "react-icons/md";
import { CgNametag } from "react-icons/cg";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { PropTypes } from "react";
import Login from "../pages/loginmain";

const isEmpty = (value) => value.trim() === "";
const isEightChar = (value) => value.trim().length === 8;

const Signup = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  // const router = useRouter();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [formIsValid, setFormIsValid] = useState({
    name: true,
    email: true,
    password: true,
  });

  const Confirm = (event) => {
    //  router.push('/');
    event.preventDefault();

    const nameEntered = nameInputRef.current.value;
    const emailEntered = emailInputRef.current.value;
    const passwordEntered = passwordInputRef.current.value;

    const NameInputValid = !isEmpty(nameEntered);
    const EmailInputValid = !isEmpty(emailEntered);
    const PasswordInputValid = !isEmpty(passwordEntered) && isEightChar(passwordEntered);

    setFormIsValid({
      name: NameInputValid,
      email: EmailInputValid,
      password: PasswordInputValid,
    });

    const formValidity =
      NameInputValid && 
      EmailInputValid &&
      PasswordInputValid;

    if (!formValidity) {
      return;
    }
    const ConfirmData = {
      name: NameInputValid,
      email: EmailInputValid,
      password: PasswordInputValid,
    };
     
    props.Data(ConfirmData)
  
  };

  return (
    <>
      {!showSignIn ? (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            {/* sigin section */}
            <div className={styles.left}>
              <div className={styles.logo}>
                <Image src={Img} alt="" width="200px" height="60px" />
              </div>
              <div className={styles.headmain}>
                <h2 className={styles.signin}>Sign Up to Account</h2>
                <div className={styles.div}></div>
                <div className={styles.social}>
                  <a href="#" className={styles.socialico}>
                    <FaFacebookF className={styles.icon} />
                  </a>

                  <a href="#" className={styles.socialico}>
                    <FaLinkedin className={styles.icon} />
                  </a>

                  <a href="#" className={styles.socialico}>
                    <FaGoogle className={styles.icon} />
                  </a>
                </div>
                <p className={styles.px}>or Signup directly</p>

                <form onSubmit={Confirm}>
                  <div className={styles.email}>
                    <div className={styles.mail}>
                      <CgNametag className={styles.ico} />
                      <input
                        className={styles.input}
                        type="name"
                        id="name"
                        required
                        ref={nameInputRef}
                        name="name"
                        placeholder="Name"
                      />
                      {!formIsValid.name && <p>Please enter your name</p>}
                    </div>
                  </div>

                  <div className={styles.email}>
                    <div className={styles.mail}>
                      <FaRegEnvelope className={styles.ico} />
                      <input
                        className={styles.input}
                        type="email"
                        name="email"
                        required
                        id="email"
                        ref={emailInputRef}
                        placeholder="Email"
                      />
                      {!formIsValid.email && <p>Please enter email</p>}
                    </div>
                  </div>

                  <div className={styles.email2}>
                    <div className={styles.mail}>
                      <MdLockOutline className={styles.ico} />
                      <input
                        className={styles.input}
                        type="password"
                        ref={passwordInputRef}
                        name="password"
                        placeholder="password"
                      />
                      {!formIsValid.password && (
                        <p>Please input password(8 chars long)</p>
                      )}
                    </div>
                  </div>

                  <div className={styles.outline}>
                    <label className={styles.label}>
                      <input
                        type="checkbox"
                        name="checkbox"
                        required
                        className={styles.rem}
                      />{" "}
                      Agree to terms & conditions
                    </label>
                  </div>
                  <button type="submit" className={styles.as}>
                    Sign up
                  </button>
                </form>
              </div>
            </div>

            <div className={styles.right}>
              <h5 className={styles.head}>Hello Friend!</h5>
              <div className={styles.text}></div>
              <p className={styles.p}>Have an Account Already?</p>
              <button onClick={() => setShowSignIn(true)} className={styles.a}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Signup;
