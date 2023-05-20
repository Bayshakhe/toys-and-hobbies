import { Player } from "@lottiefiles/react-lottie-player";
import loginImage from "../../../public/login.json";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const {login,googleLogin} = useContext(AuthContext)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault()
    console.log(data);

    login(data.email, data.password)
    .then(result => {
      console.log(result.user)
      navigate(from, {replace:true})
    })
    .then(error => {
      console.log(error.message)
      setError(error.message)
    })
  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      console.log(result.user)
      navigate(from, {replace:true})
    })
    .catch(err => console.log(err))
  }
  return (
    <div className=" min-h-screen">
      <h1 className="text-5xl font-bold text-center pt-8">Login now!</h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse md:gap-10">
          <div className="text-center lg:text-left">
            <Player
              autoplay
              loop
              src={loginImage}
              style={{ height: "500px", width: "500px" }}
            ></Player>
          </div>
          <div className="rounded-md flex-shrink-0 w-full lg:w-[50%] shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    required
                    className="input input-bordered"
                  />
                </div>
                {
                  error && <p>{error}</p>
                }
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn bg-rose-600 hover:bg-rose-700"
                  />
                </div>
              </form>
              <p className="text-sm mb-2 ml-1">
                New at Toys & Hobbies? Please{" "}
                <Link to="/register" className="text-blue-600 font-semibold">
                  Register
                </Link>
              </p>
              <div className="divider">OR</div>
              <div className="flex justify-center items-center gap-3">
                <Link>
                  <img
                   onClick={handleGoogleLogin}
                    className="w-12"
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt="Google"
                  />
                </Link>
                <Link>
                  <img
                    className="w-12"
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="Github"
                  />
                </Link>
                <Link>
                  <img
                    className="w-12"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qONJfLFqTbfAacaOuzgSQQigqxPM2o8njg&usqp=CAU"
                    alt="Linkedin"
                  />
                </Link>
                <Link>
                  <img
                    className="h-8"
                    src="https://designshack.net/wp-content/uploads/larrybird-2.jpg"
                    alt="Twitter"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
