import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const MyToy = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [myToys, setMyToys] = useState([]);
    console.log(myToys)

    const handleDelete = id => {
        const proceed = confirm('Are you sure to delete');
        if (proceed) {
            fetch(`https://toys-and-hobbies-server.vercel.app/toy/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = myToys.filter(toys => toys._id !== id);
                        setMyToys(remaining);
                    }
                })
        }
    }

    const url = `https://toys-and-hobbies-server.vercel.app/my-toys?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="font-bold text-4xl text-center my-12 md:my-16 underline">My Toys</h2>
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="">
                            <th>S/N</th>
                            <th>Toy Name</th>
                            <th>Toy Category</th>
                            <th>Toy Price</th>
                            <th>Toy Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map((toy, index) =>
                                <tr key={toy._id} className="">
                                    <th>{index + 1}</th>
                                    <td>{toy.name}</td>
                                    <td>{toy.subcategory}</td>
                                    <td>$ {toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td className="space-x-1">
                                        <Link to={`/update-toy/${toy._id}`} className="btn btn-warning">Update</Link>
                                        <button onClick={() => handleDelete(toy._id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyToy;