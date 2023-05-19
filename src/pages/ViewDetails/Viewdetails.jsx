import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Viewdetails = () => {
    const {singletoyData} = useContext(AuthContext)
    const {name, picture, price, quantity, rating, seller, subcategory} = singletoyData
    console.log(singletoyData)
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <img className="rounded-xl" src={picture} alt="Product Image" />
          <div>
            <h5 className="text-3xl font-bold mb-2">{name}</h5>
            <p className="text-lg font-bold">{subcategory}</p>
            <p className="font-semibold">Price: <span className=" text-rose-600">${price}</span></p>
            <div className="my-2"><span className="font-semibold">Seller Name: </span>  {seller?.name}
            <br />
            <span className="font-semibold">Seller Email: </span> {seller?.email}
            </div>
            <p><span className="font-semibold">Available Quantity: </span>{quantity}</p>
            <p><span className="font-semibold">Rating: </span>{rating}</p>
          </div>
          </div>
          
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="normal-case btn btn-outline btn-outline-rose">
              OK!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewdetails;
