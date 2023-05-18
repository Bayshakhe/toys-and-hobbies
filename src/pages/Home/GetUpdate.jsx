import toast from 'react-hot-toast';

const GetUpdate = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        if(e.target.email.value){
            toast.success('Thank You.');
        }
    }
  return (
    <div className="bg-rose-600 text-white text-center py-4">
      <h2 className="font-bold text-5xl text-center pb-3 mt-10">Get Update</h2>
      <p className="w-full max-w-md mx-auto my-2">If you interested with our <span className='font-semibold'>&quot;Get Update&quot;</span> feature, send us your email. We will inform you about our new Toys.</p>
      <form onSubmit={handleSubmit} className="form-control mb-5">
        <div className="input-group justify-center my-3">
          <input
            type="email"
            name='email'
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs text-black"
          />
          <input type="submit" className="btn btn-square" value='Send' />
        </div>
      </form>
    </div>
  );
};

export default GetUpdate;
