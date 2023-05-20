import { Link } from "react-router-dom";

const SingleCategory = ({ data }) => {
  const { _id, picture, name, price, rating } = data;
  //   console.log(data);
  return (
    <>
      <div className="card bg-base-100 shadow-xl m-5">
        <figure>
          <img className=" h-[300px]" src={picture} alt="Toys" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-rose-600 font-semibold">Price: ${price}</p>
          <p className="font-semibold">Rating: {rating}</p>
          <div className="card-actions justify-end">
            <Link to={`/viewDetails/${_id}`}
              
              className="normal-case btn btn-outline btn-outline-rose"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCategory;
