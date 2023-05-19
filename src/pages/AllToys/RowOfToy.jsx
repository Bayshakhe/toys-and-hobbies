import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const RowOfToy = ({ toy, i }) => {
  const { _id, name, price, quantity, seller, subcategory } = toy;
  const {handleViewDetails} = useContext(AuthContext)
  return (
    <tr>
      <th>{i}</th>
      <td>
        <p>
          <span className="font-semibold">Name:</span> {seller.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {seller.email}
        </p>
      </td>
      <td>{name}</td>
      <td className="font-semibold">{subcategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <label
          onClick={() => handleViewDetails(_id)}
          htmlFor="my-modal-5"
          className="normal-case btn btn-outline btn-outline-rose"
        >
          View Details
        </label>
      </td>
    </tr>
  );
};

export default RowOfToy;
