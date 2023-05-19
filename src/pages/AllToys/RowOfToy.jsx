import { Link } from "react-router-dom";

const RowOfToy = ({toy,i}) => {
    const {_id, name, price, quantity, seller, subcategory,} = toy
    
  return (
    <tr>
      <th>{i}</th>
      <td>
        <p>Name: {seller.name}</p>
        <p>Email: {seller.email}</p>
      </td>
      <td>{name}</td>
      <td>{subcategory}</td>
      <td>{price}</td>
      <td >{quantity}</td>
      <td >
        <Link className="btn btn-outline btn-outline-rose normal-case">See Details</Link>
      </td>
    </tr>
  );
};

export default RowOfToy;
