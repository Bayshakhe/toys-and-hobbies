import { useContext, useEffect, useState } from "react";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [myToys, setMyToys] = useState([]);
  // console.log(myToys);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toys-and-hobbies-server.vercel.app/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((toys) => toys._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  const url = `https://toys-and-hobbies-server.vercel.app/my-toys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url]);

  const [sortOrder, setSortOrder] = useState(null);
  useEffect(() => {
    filterData();
  }, [sortOrder]);

  const filterData = () => {
    let filtered = [...myToys];

    if (sortOrder === "ascending") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "descending") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setMyToys(filtered);
  };

  const handleSortClick = () => {
    if (sortOrder === "ascending") {
      setSortOrder("descending");
    } else {
      setSortOrder("ascending");
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="font-bold text-4xl text-center mt-12 mb-6  underline">
        My Toys
      </h2>
      <div className="flex justify-center">
        <button
          onClick={handleSortClick}
          className="btn  mb-4 md:mb-8"
        >
          Sort {sortOrder === "ascending" ? "Descending" : "Ascending"}
        </button>
      </div>
      <div className="overflow-x-auto mb-8">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="">
              <th></th>
              <th>Toy</th>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy, index) => (
              <tr key={toy._id} className="">
                <th>{index + 1}</th>
                <th>
                  <img className="w-16" src={toy.picture} alt="" />
                </th>
                <td>{toy.name}</td>
                <td>{toy.SellerEmail}</td>
                <td>{toy.subcategory}</td>
                <td>$ {toy.price}</td>
                <td>{toy.quantity}</td>
                <td className="space-x-1">
                  <Link
                    to={`/update-toy/${toy._id}`}
                    className="btn  bg-rose-600 hover:bg-rose-600"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
