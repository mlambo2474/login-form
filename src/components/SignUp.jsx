import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";
import { loginContext } from "../Context/LoginContext";

const SignUp = () => {
  const [mode, setMode] = useState("signup");
  const { setUsername, setShowProfile } = useContext(loginContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;

    // const storedUser = JSON.parse(localStorage.getItem("user"));

    if (mode === "signup") {
      const randomNumber = Math.floor(10000 + Math.random() * 9000);
      const generatedUsername = `${email.split("@")[0]}${randomNumber}`;

      const existingUsers = JSON.parse(localStorage.getItem("user")) || [];
      const newUser = {
        email: data.email,
        username: generatedUsername,
        password: data.password,
      };
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem("user", JSON.stringify(updatedUsers));

      setShowProfile(true);
      setUsername(generatedUsername); // after form submission
      console.log(data);

    }  
  if( mode === "login"){
      const storedUsers = JSON.parse(localStorage.getItem("user")) || [];
      if (!Array.isArray(storedUsers)) {
        console.error("Expected 'users' in localStorage to be an array, but got:", storedUsers);
        return;
      }
      const matchedUser = storedUsers.find(
        (user) =>
          (user.email === data.loginId || user.generatedUsername === data.logInId) &&
          user.password === data.password
      );
      if (matchedUser) {
        setUsername(matchedUser.username);
        setShowProfile(true);
      }
    }
  };

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1745173036546-c56551790fb8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white/3 backdrop-blur-sm p-8 rounded-2xl shadow-lg w-full max-w-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col text-gray-300 "
        >
          {mode === "signup" && (
            <>
              <h1 className="font-bold text-white mb-2">Create your account</h1>
              <input
                type="text"
                name="Fullname"
                placeholder="fullname"
                className="border border-white rounded-lg p-2 placeholder-white  outline-none"
                {...register("fullName", {
                  required: "fullname is required",
                  maxLength: 80,
                })}
              />
              <div className="mb-2">
                {" "}
                {errors.fullName && <span>{errors.fullName.message}</span>}
              </div>

              <input
                type="email"
                name="Email"
                placeholder="email"
                {...register("email", { required: "email is required" })}
                className="border border-white rounded-lg p-2 placeholder-white outline-none"
              />
              <div className="mb-2">
                {" "}
                {errors.email && <span>{errors.email.message}</span>}
              </div>

              <input
                type="tel"
                name="mobile"
                placeholder="phone number"
                {...register("mobile", {
                  required: "phone number is required",
                })}
                className="border border-white rounded-lg p-2 placeholder-white  mb-2  outline-none"
              />
              <div className="mb-2">
                {" "}
                {errors.mobile && <span>{errors.mobile.message}</span>}
              </div>

              <select
                {...register("title", { required: "title is required" })}
                className="border border-white rounded-lg p-2 placeholder-white  mb-2 outline-none"
              >
                <option value="">Select title</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
              <div className="mb-2">
                {" "}
                {errors.title && <span>{errors.title.message}</span>}
              </div>
            </>
          )}

          {mode === "login" && (
            <>
              <h1 className="font-bold text-white mb-2">
                Log in into your account
              </h1>
              <input
                type="text"
                name="loginId"
                placeholder="Email or username"
                {...register("loginId", {
                  required: "Email or username is required",
                  validate: (value) => {
                    // Basic check for email format or username format
                    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                    const isUsername = /^[a-zA-Z0-9]+[0-9]{4}$/.test(value);

                    if (!isEmail && !isUsername) {
                      return "Please enter a valid email or username";
                    }
                    return true;
                  },
                })}
                className="border border-white rounded-lg p-2 placeholder-white mb-2 outline-none"
              />
            </>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: passwordRegex,
                message:
                  "Password must include atleast 1 capital , 1 number and 1 symbol",
              },
            })}
            className="border border-white rounded-lg p-2 placeholder-white  mb-2  outline-none"
          />
          <div className="mb-2">
            {" "}
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <button
            type="submit"
            className="bg-gray-500 border-gray-500 rounded-lg p-2 placeholder-white  mb-2 font-bold outline-none text-white "
          >
            Submit
          </button>

          {/* Switch Between Modes */}
          <p className="mt-2">
            {mode === "signup" ? (
              <>
                You already have an account?{" "}
                <span
                  onClick={() => setMode("login")}
                  className="text-white font-bold underline cursor-pointer"
                >
                  Login
                </span>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <span
                  onClick={() => setMode("signup")}
                  className="text-white font-bold underline cursor-pointer"
                >
                  Sign Up
                </span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
