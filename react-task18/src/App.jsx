import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const hanldeRegister = () => {
    alert("Form submitted!");
    console.log("Form submitted!");
    reset();
  };
  return (
    <>
      <div className=" h-screen w-screen flex">
        <div
          className=" w-[50%] h-full"
          style={{
            backgroundImage: `url('/rg.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className=" w-[50%] h-full bg-white ">
          <h1 className=" text-5xl font-bold text-center mt-16">
            {" "}
            Register Now with Us
          </h1>
          <h1 className=" text-md mt-8 text-red-600 text-center font-bold">
            {" "}
            Fill up the register form below to connect with us
          </h1>
          <hr />

          <form action="submit" onSubmit={handleSubmit(hanldeRegister)}>
            <h1 className=" text-2xl font-semibold text-center mt-10 ">
              Firstname
            </h1>
            <div className="flex justify-center px-4 lg:px-48">
              {" "}
              <input
                type="text"
                placeholder={
                  errors.firstname
                    ? errors.firstname.message
                    : " Enter your Firstname"
                }
                className={` border-[3px] p-1 font-black text-center text-lg border-black rounded-md w-full mt-2 ${
                  errors.firstname
                    ? "border-red-500 placeholder-red-500"
                    : "border-black"
                }`}
                {...register("firstname", {
                  required: "firstname required!",
                })}
              />
            </div>

            <h1 className=" text-2xl font-semibold text-center mt-7 ">
              Lastname
            </h1>
            <div className="flex justify-center px-4 lg:px-48">
              {" "}
              <input
                type="text"
                placeholder={
                  errors.lastname
                    ? errors.lastname.message
                    : "Enter your Lastname"
                }
                className={` border-[3px] p-1 font-black text-center text-lg border-black rounded-md w-full mt-2 ${
                  errors.lastname
                    ? "border-red-500 placeholder-red-500"
                    : "border-black"
                }`}
                {...register("lastname", { required: "lastname required" })}
              />
            </div>

            <h1 className=" text-2xl font-semibold text-center mt-7 ">Email</h1>
            <div className="flex justify-center px-4 lg:px-48">
              {" "}
              <input
                type="email"
                placeholder={
                  errors.email
                    ? errors.email.message
                    : "Enter you email address"
                }
                className={`border-[3px] p-1 font-black text-center text-lg border-black rounded-md w-full mt-2 ${
                  errors.email
                    ? "border-red-500 placeholder-red-500"
                    : "border-black"
                }`}
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </div>

            <h1 className=" text-2xl font-semibold text-center mt-7 ">
              Password
            </h1>
            <div className="flex justify-center px-4 lg:px-48">
              {" "}
              <input
                type="password"
                placeholder={
                  errors.password ? errors.password.message : "Enter password"
                }
                className={` border-[3px] p-1 font-black text-center text-lg border-black rounded-md w-full mt-2 ${
                  errors.password
                    ? "border-red-500 placeholder-red-500"
                    : "border-black"
                }`}
                {...register("password", {
                  required: "Password cannot be empty",
                  minLength: {
                    value: 8,
                    message: "password must be minimum of 8 characters",
                  },
                })}
              />
            </div>

            <div className="flex justify-center mt-12">
              <button className=" bg-red-500 text-white font-semibold p-2 w-64 hover:bg-red-400 text-lg">
                {" "}
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
