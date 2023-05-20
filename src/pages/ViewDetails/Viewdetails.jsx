import { useLoaderData } from "react-router-dom";

const Viewdetails = () => {
  // const {singletoyData} = useContext(AuthContext)
  const singletoyData = useLoaderData();
  const { name, picture, price, quantity, rating, seller, subcategory } =
    singletoyData;
  // console.log(singletoyData)
  return (
    <div className="m-5 md:w-3/4 md:mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <img className="rounded-xl" src={picture} alt="Product Image" />
      <div>
        <h5 className="text-3xl font-bold mb-2">{name}</h5>
        <p className="text-lg font-bold">{subcategory}</p>
        <p className="font-semibold">
          Price: <span className=" text-rose-600">${price}</span>
        </p>
        <div className="my-2">
          <span className="font-semibold">Seller Name: </span> {seller?.name}
          <br />
          <span className="font-semibold">Seller Email: </span> {seller?.email}
        </div>
        <p>
          <span className="font-semibold">Available Quantity: </span>
          {quantity}
        </p>
        <p>
          <span className="font-semibold">Rating: </span>
          {rating}
        </p>
      </div>
    </div>
  );
};

export default Viewdetails;
