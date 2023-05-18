import { Player } from "@lottiefiles/react-lottie-player";
import loginImage from "../../../public/login.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const {createUser,updateUser,googleLogin} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault()
    // console.log(data);

    createUser(data.email, data.password)
    .then(result => {
      // console.log(result.user)
      updateUser(data.name, data.photoURL)
      .then(()=> {
        
      })
      .catch(error => console.log(error))
    })
    .then(error => {
      console.log(error)
    })
  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      console.log(result.user)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className=" min-h-screen mb-10">
      <h1 className="text-5xl font-bold text-center pt-8">Please Register!</h1>
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
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name")}
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Photo URL"
                    {...register("photoURL")}
                    required
                    className="input input-bordered"
                  />
                </div>
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
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn bg-rose-600 hover:bg-rose-700"
                  />
                </div>
              </form>
              <p className="text-sm mb-2 ml-1">
                Alreade have an account? Please{" "}
                <Link to="/login" className="text-blue-600 font-semibold">
                  Login
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

export default Register;
