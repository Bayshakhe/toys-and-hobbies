import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import GetUpdate from "../GetUpdate/GetUpdate";
import OurCustomer from "../OurCustomer/OurCustomer";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <OurCustomer></OurCustomer>
            <GetUpdate></GetUpdate>
        </div>
    );
};

export default Home;