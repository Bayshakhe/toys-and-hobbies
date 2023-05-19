import Banner from "./Banner";
import Gallery from "./Gallery";
import GetUpdate from "./GetUpdate";
import ShopByCategory from "./ShopByCategory";

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