import { useContext } from "react";
import RowOfToy from "./RowOfToy";
import { AuthContext } from "../../providers/AuthProviders";

const AllToys = () => {
  const { toysData } = useContext(AuthContext);

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <div className="w-full md:w-[20%] mx-auto my-5">
          <label className="input-group ">
            <input
              type="text"
              placeholder="Search your Toy"
              className="input input-bordered"
            />
            <button className="btn">Search</button>
          </label>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toysData.map((toy, i) => (
              <RowOfToy key={toy._id} toy={toy} i={i + 1}></RowOfToy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
