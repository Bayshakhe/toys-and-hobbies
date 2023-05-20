import { Link } from "react-router-dom";

const RowOfToy = ({ toy, i }) => {
  const { _id, name, price, quantity, seller, subcategory } = toy;
  return (
    <tr>
      <th>{i}</th>
      <td>
        <p>
          <span className="font-semibold">Name:</span> {seller?.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {seller?.email}
        </p>
      </td>
      <td>{name}</td>
      <td className="font-semibold">{subcategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <Link
          to={`/viewDetails/${_id}`}
          className="normal-case btn btn-outline btn-outline-rose"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default RowOfToy;
