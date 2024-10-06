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
import React from "react";
import Box from "./Box";
import data from "/resources/inventory.json";

const Home = () => {
  return (
    <div className="bg-[#ffffff] min-h-screen px-8 py-10 opacity-80">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-10">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {data.map((item, index) => (
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
