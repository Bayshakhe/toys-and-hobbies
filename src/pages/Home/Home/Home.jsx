import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import GetUpdate from "../GetUpdate/GetUpdate";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <GetUpdate></GetUpdate>
        </div>
    );
};

export default Home;