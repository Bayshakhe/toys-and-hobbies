import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import toast from 'react-hot-toast';

const AddAToy = () => {
    const {user} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
  } = useForm();


  const handleAddToy = (data, event) => {
    event.preventDefault()
    console.log(data);
    fetch('https://toys-and-hobbies-server.vercel.app/toys',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        // console.log(34, data)
        if(data?.insertedId){
            toast.success('Successfully added your Toy');
            event.target.reset()
        }
    })

  };

  // picture,subcategory, desciption
  return (
    <div className="container mx-auto w-full md:w-[75%] mt-12">
      <form onSubmit={handleSubmit(handleAddToy)}>
        {/* toy name and price */}
        <div className="md:flex justify-between gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Toy Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter Toy Name"
                {...register("name")}
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter Toy Price"
                {...register("price")}
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Quantity and Rating */}
        <div className="md:flex justify-between gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter Toy Quantity"
                {...register("quantity")}
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter Toy Rating"
                {...register("rating")}
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* seller email and email*/}
        <div className="md:flex justify-between gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Seller Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                value={user?.email}
                {...register("SellerEmail")}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Seller Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                value={user?.displayName}
                {...register("SellerName")}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* select and description*/}
        <div className="md:flex justify-between gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Select Sub Category</span>
            </label>
            <label className="input-group">
            {/* <Select
              defaultValue={selectedOption}
              {...register("subcategory")}
              required
              onChange={setSelectedOption}
              options={options}
            /> */}
            <select {...register("subcategory")} id="">
              <option value="Board Games">Board Games</option>
              <option value="Puzzles">Puzzles</option>
              <option value="Card Games">Card Games</option>
              <option value="Cube Fidget Toy">Cube Fidget Toy</option>
            </select>
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <label className="input-group">
              <textarea
                type="text"
                placeholder="Enter Toy Description"
                {...register("description")}
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* toy picture */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Toy Picture</span>
          </label>
          <label className="input-group">
          <input
                type="url"
                placeholder="Enter Picture URL"
                {...register("picture")}
                required
                className="input input-bordered w-full"
              />
          </label>
        </div>
        <button className="input input-bordered w-full mt-5 btn bg-rose-600 font-bold">
          Add a Toy
        </button>
      </form>
    </div>
  );
};

export default AddAToy;
