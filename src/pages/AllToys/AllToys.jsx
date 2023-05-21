import { useContext, useEffect, useState } from "react";
import RowOfToy from "./RowOfToy";
import { AuthContext } from "../../providers/AuthProviders";

const AllToys = () => {
  const { toysData } = useContext(AuthContext);
  const data = toysData;

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    filterData();
  }, [searchQuery]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
    // console.log(event.target.value);
  };

  const filterData = () => {
    let filtered = [...data];

    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredData(filtered);
  };

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <div className="form-control">
          <div className="input flex justify-center">
            <input
              value={searchQuery}
              onChange={handleSearchQueryChange}
              placeholder="Search by name"
              className="input input-bordered w-full md:w-1/2"
            />
          </div>
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
            {filteredData.map((toy, i) => (
              <RowOfToy key={toy._id} toy={toy} i={i + 1}></RowOfToy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
