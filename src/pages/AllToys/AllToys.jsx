import { useEffect, useState } from "react";
import RowOfToy from "./RowOfToy";

const AllToys = () => {
  const [toysData, setToysData] = useState([]);
  
  useEffect(() => {
    fetch("https://toys-and-hobbies-server-bayshakhe.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToysData(data);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
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
            {toysData.map((toy,i) => (
              <RowOfToy key={toy._id} toy={toy} i={i+1}></RowOfToy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
