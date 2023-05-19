import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleCategory from "./SingleCategory";

const ShopByCategory = () => {
  const [boardGames, setBoardGames] = useState([]);
  const [puzzleGames, setPuzzleGames] = useState([]);
  const [cardGames, setCardGames] = useState([]);
  const [CubeGames, setCubeGames] = useState([]);
  // console.log(toysData[3]?.subcategory)
  useEffect(() => {
    fetch(`http://localhost:5000/toys/Board Games`)
      .then((res) => res.json())
      .then((data) => setBoardGames(data));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/toys/Puzzles`)
      .then((res) => res.json())
      .then((data) => setPuzzleGames(data));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/toys/Card Games`)
      .then((res) => res.json())
      .then((data) => setCardGames(data));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/toys/Cube Fidget Toy`)
      .then((res) => res.json())
      .then((data) => setCubeGames(data));
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h2 className="font-bold text-5xl text-center mb-8 pt-8">
        Shop by Category
      </h2>
      <Tabs className="md:text-center">
        <TabList>
          <Tab>Board Games</Tab>
          <Tab>Puzzle Games</Tab>
          <Tab>Card Games</Tab>
          <Tab>Cube Fidget Toys</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10 mt-8">
            {boardGames.map((data, i) => (
              <SingleCategory key={i} data={data}></SingleCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10 mt-8">
            {puzzleGames.map((data, i) => (
              <SingleCategory key={i} data={data}></SingleCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10 mt-8">
            {cardGames.map((data, i) => (
              <SingleCategory key={i} data={data}></SingleCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10 mt-8">
            {CubeGames.map((data, i) => (
              <SingleCategory key={i} data={data}></SingleCategory>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
