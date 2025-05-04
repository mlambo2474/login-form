import { useForm } from "react-hook-form";
import React, { useState } from "react";

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isLogIn, setIsLogIn] = useState(false);

  const loginHandler = () => {
    setIsSignUp(false);
    setIsLogIn(true);
  };
  const signUpHandler = () => {
    setIsSignUp(true);
    setIsLogIn(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const passwordRegex = /^(?=. * [A-Z])(?=. * \d)(?=. * \W_ ).{6,}$/;

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1745173036546-c56551790fb8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white/3 backdrop-blur-sm p-8 rounded-2xl shadow-lg w-full max-w-md">
        {isSignUp && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col text-gray-400"
          >
            <input
              placeholder="First name"
              {...register("firstName", {
                required: "firstName is required",
                maxlength: 80,
              })}
              className="border border-white rounded-lg p-2 placeholder-white  outline-none"
            />
                <div  className="mb-2">{errors.firstName && <span>{errors.firstName.message}</span>}</div>

            <input
              placeholder="Last name"
              {...register("lastName", {
                required: "lastName is required",
                maxlength: 80,
              })}
              className="border border-white rounded-lg p-2 placeholder-white outline-none "
            />
              <div  className="mb-2"> {errors.lastName && <span>{errors.lastName.message}</span>}</div>

            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required ",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              className="bg-none border border-white rounded-lg p-2 placeholder-white  outline-none"
            />
               <div  className="mb-2"> {errors.email && <span>{errors.email.message}</span>}</div>

            <input
              type="tel"
              placeholder="Phone number"
              {...register("mobile", {
                required: "mobile number is required",
                minlength: { value: 6, message: "min length is 6 digits" },
                maxlength: { value: 12, message: "max lenght is 12 digits" },
              })}
              className="border border-white rounded-lg p-2 placeholder-white  outline-none"
            />
               <div  className="mb-2"> {errors.mobile && <span>{errors.mobile.message}</span>}</div>

            <select
              {...register("title", { required: "title is required" })}
              className="border border-white rounded-lg p-2 placeholder-white  outline-none"
            >
              <option value="">Select title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
            <div  className="mb-2">  {errors.title && <span>{errors.title.message}</span>} </div>

            {/* <div className="py-2">
      <label className="" x>
        <input
          {...register("developer", {
            required: "This field is required",
          })}
          type="radio"
          value="Yes"
        />
        Yes
      </label>
      <label>
        <input
          {...register("developer", {
            required: "This field is required",
          })}
          type="radio"
          value="No"
        />
        No
      </label>
    </div> */}
               <div  className="mb-2">{errors.developer && <span>{errors.developer.message}</span>}</div>

            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: passwordRegex,
                  message:
                    "Password must include atleast 1 capital , 1 number and 1 symbol",
                },
              })}
              className="border border-white rounded-lg p-2 placeholder-white  outline-none"
            />
                <div  className="mb-2">{errors.password && <span>{errors.password.message}</span>}</div>

            <button
              type="submit"
              className="bg-gray-500 border-gray-500 rounded-lg p-2 placeholder-white  font-bold outline-none text-white"
            >
              Submit
            </button>
            <p>
              You already have an account?{" "}
              <span
                className="text-white font-bold underline cursor-pointer"
                onClick={loginHandler}
              >
                login
              </span>{" "}
            </p>
          </form>
        )}

        {isLogIn && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col text-gray-400"
          >
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required ",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              className="bg-none border border-white rounded-lg p-2 placeholder-white  outline-none"
            />
           <div  className="mb-2">  {errors.email && <span>{errors.email.message}</span>}</div>

            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: passwordRegex,
                  message:
                    "Password must include atleast 1 capital , 1 number and 1 symbol",
                },
              })}
              className="border border-white rounded-lg p-2 placeholder-white  outline-none"
            />
           <div className="mb-2"> {errors.password && <span>{errors.password.message}</span>}</div>

            <button
              type="submit"
              className="bg-gray-500 border-gray-500 rounded-lg p-2 placeholder-white  font-bold outline-none text-white "
            >
              Submit
            </button>
            <p  className="mt-2 ">
              You dont have an account?{" "}
              <span
                className="text-white font-bold underline cursor-pointer "
                onClick={signUpHandler}
              >
                Sign Up
              </span>{" "}
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
