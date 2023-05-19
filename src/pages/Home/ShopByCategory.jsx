
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  
  return (
    <div className="container mx-auto my-10">
      <h2 className="font-bold text-5xl text-center mb-8 pt-8">
        Shop by Category
      </h2>
      <Tabs className='md:text-center'>
        <TabList>
          <Tab>Board Games</Tab>
          <Tab>Puzzle Games</Tab>
          <Tab>Card Games</Tab>
          <Tab>Cube Fidget Toys</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
