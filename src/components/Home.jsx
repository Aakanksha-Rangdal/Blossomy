// import React from "react";
// import Box from "./Box";
// import data from "../resources/inventory.json";

// const Home = () => {
//   return (
//     <div>

//       <div className="grid grid-cols-4  justify-start">
//         {data.map((item) => {
//           return (
//             <Box
//               image={item.image}
//               title={item.title}
//               description={item.description}
//               price={item.price}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import Box from "./Box";
import data from "/resources/inventory.json";
import searchIcon from "/src/assets/search.svg";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inventoryData, setInventoryData] = useState(data);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const filteredItems = data.filter((item) => {
      if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      }
    });
    setInventoryData(filteredItems);
  }, [searchTerm]);
  useEffect(() => {
    setInventoryData(data);
  }, [data]);
  console.log(inventoryData);
  return (
    <div className="bg-[#fff] min-h-screen px-8 py-10 opacity-80">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-10">
        Our Products
      </h1>
      <div className="flex max-w-lg m-auto border p-1 rounded-lg items-center border-black">
        <img src={searchIcon} alt="" className="w-10" />
        <input
          onChange={handleSearch}
          className="w-full p-2 text-xl outline-none"
          value={searchTerm}
        ></input>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {inventoryData.map((item, index) => (
          <Box
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
