const { useState } = require("react");

// Custom hook to filter data based on category
const useFilter = (Data) => {
  // State to keep track of currently active category
  const [active, setActive] = useState("All Categories");
  // State to store filtered data based on active category
  const [catData, setCatData] = useState(Data);
  // Array of all categories including "All Categories" as the first item
  const allCategory = ["All Categories", ...new Set(Data.map(item => item.category))];

  // Function to filter data based on selected category
  const filterDandeler = (category) => {
    // If "All Categories" is selected, set the full data
    if (category === "All Categories") {
      setCatData(Data);
    } else {
      // Filter data based on selected category
      setCatData(Data.filter(item => item.category === category));
    }
    // Set selected category as the active category
    setActive(category);
  };

  // Return the filter function, array of all categories, filtered data, and active category
  return { filterDandeler, allCategory, catData, active };
};

export default useFilter;
