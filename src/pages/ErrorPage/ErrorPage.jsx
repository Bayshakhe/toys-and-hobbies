import { Player } from "@lottiefiles/react-lottie-player";
import errorImage from "../../../public/error-page-not-found.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={errorImage}
        style={{ height: "500px", width: "500px" }}
      >
      </Player>
      <div className="text-center">
      <Link to='/' className="btn bg-orange-500 border-0">Back to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
