import Marquee from "react-fast-marquee";

const OurCustomer = () => {
  const customers = [
    {
      productImg:
        "https://media.wired.com/photos/5f592bfb643fbe1f6e6807ec/16:9/w_2400,h_1350,c_limit/business_chess_1200074974.jpg",
      productName: "Classic Chesse",
      comments:
        "The quality of product is awesome! Me and my wife love this. Thank you!",
      customerImg:
        "https://media.licdn.com/dms/image/C5603AQHCxXb1U_jswA/profile-displayphoto-shrink_800_800/0/1638993163320?e=2147483647&v=beta&t=IBVFshUS6mpaVUGZ6OPPfajwy2iCbI8L-zgOEbKkCqI",
      customerName: "Shirley Reyes",
      postedOn: "April 27, 2023",
      rating: "5.0",
    },
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0559/3445/1810/collections/developmental-toys-puzzles.jpg?v=1660927843",
      productName: "Puzzle for Toddler",
      comments:
        "My baby playing with you puzzle. The quality of product is awesome! My baby love this!",
      customerImg:
        "https://media.licdn.com/dms/image/C5603AQE3CiU3TWsQaA/profile-displayphoto-shrink_800_800/0/1519435464972?e=2147483647&v=beta&t=PX2DljTRada4jaLZiWfwESZwQQV4_PlSsz51MLTbz0I",
      customerName: "Riana Rossy",
      postedOn: "May 4, 2023",
      rating: "5.0",
    },
    {
      productImg:
        "https://images.newscientist.com/wp-content/uploads/2017/06/30133803/pa-30292018.jpg",
      productName: "Classic Cube",
      comments: "The quality of product is awesome! My son love this.",
      customerImg:
        "https://media.licdn.com/dms/image/D5603AQF-ruF4t7EbUA/profile-displayphoto-shrink_400_400/0/1675959950539?e=1689811200&v=beta&t=MC1pRsw0GPzZ27fHxYKzP35tESDEQTsjKIKPFGNwJks",
      customerName: "Shibao Rin",
      postedOn: "April 15, 2023",
      rating: "4.2",
    },
    {
      productImg:
        "https://www.ubergames.co.uk/wp-content/uploads/2021/05/carrom-1100x600-1.jpg",
      productName: "Classic Carrom",
      comments: "It is really greate! We love this. Go Ahead!",
      customerImg:
        "https://media.licdn.com/dms/image/D4D03AQEiL2QLYxObRQ/profile-displayphoto-shrink_400_400/0/1673569288010?e=1686787200&v=beta&t=UrSJbSX15NFK7r-SkMomEWvmXqbxWGqMn9jZ7IIw0zo",
      customerName: "Vinchan Joe",
      postedOn: "May 10, 2023",
      rating: "4.4",
    },
  ];

  return (
    <div className="container mx-auto my-10">
      <h2 className="font-bold text-5xl text-center mb-8 pt-8">
        Our Customer Loves Us
      </h2>

      <Marquee speed={20}>
        {customers.map((customer, i) => (
          <div key={i} className=" w-96 mx-4 shadow-xl pb-3">
            <div className="border m-10">
              <figure className="px-8 pt-8">
                <img
                  className="rounded-xl h-[100px] mx-auto"
                  src={customer.productImg}
                  alt="Toys"
                />
              </figure>
              <div className="text-center mt-3">
                <h2 className="font-bold text-lg">{customer.productName}</h2>
                <p className="mb-5 h-16">{customer.comments}</p>
                <div className="flex gap-4 items-center mx-4 mb-4">
                  <img
                    className="rounded-full w-12"
                    src={customer.customerImg}
                    alt="Profile image"
                  />
                  <div>
                    <p className="font-semibold">{customer.customerName}</p>
                    <p className="text-sm">{customer.postedOn}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default OurCustomer;
