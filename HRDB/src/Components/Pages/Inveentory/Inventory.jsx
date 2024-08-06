import React, { useState } from "react";
import { FaLaptop, FaMouse, FaKeyboard } from "react-icons/fa";
import Title from "../../Daxbod/Title";

const Inventory = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Laptop",
      quantity: 10,
      location: "Aligarh",
      cost: 1000,
      icon: <FaLaptop />,
    },
    {
      id: 2,
      name: "Mouse",
      quantity: 50,
      location: "Aligarh",
      cost: 20,
      icon: <FaMouse />,
    },
    {
      id: 3,
      name: "Keyboard",
      quantity: 30,
      location: "Aligarh",
      cost: 50,
      icon: <FaKeyboard />,
    },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    quantity: "",
    location: "",
    cost: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity && newItem.location && newItem.cost) {
      let icon;
      switch (newItem.name.toLowerCase()) {
        case "laptop":
          icon = <FaLaptop />;
          break;
        case "mouse":
          icon = <FaMouse />;
          break;
        case "keyboard":
          icon = <FaKeyboard />;
          break;
        default:
          icon = <FaLaptop />;
      }
      setItems([
        ...items,
        {
          id: items.length + 1,
          name: newItem.name,
          quantity: parseInt(newItem.quantity),
          location: newItem.location,
          cost: parseFloat(newItem.cost),
          icon: icon,
        },
      ]);
      setNewItem({ name: "", quantity: "", location: "", cost: "" });
    }
  };

  const calculateTotalCost = () => {
    const total = items.reduce(
      (acc, item) => acc + item.cost * item.quantity,
      0
    );
    const tax = total * 0.1;
    return { total, tax, totalWithTax: total + tax };
  };

  const { total, tax, totalWithTax } = calculateTotalCost();

  return (
    <div className="bg-gray-100 h-screen p-4 sm:ml-64 flex flex-col gap-5 mt-14 dark:bg-gray-800">
      <Title>Inventory Management</Title>

      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Current Inventory
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium">
                  Icon
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium">
                  Item Name
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium">
                  Quantity
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium">
                  Location
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium">
                  Cost
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-600">
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="py-3 px-6 text-sm text-gray-800 dark:text-gray-200">
                    {item.icon}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-800 dark:text-gray-200">
                    {item.name}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-800 dark:text-gray-200">
                    {item.quantity}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-800 dark:text-gray-200">
                    {item.location}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-800 dark:text-gray-200">
                    ₹{item.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-5">
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mt-6 w-full sm:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Add New Item
          </h2>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={newItem.name}
              onChange={handleInputChange}
              placeholder="Item Name"
              className="p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
            />
            <input
              type="number"
              name="quantity"
              value={newItem.quantity}
              onChange={handleInputChange}
              placeholder="Quantity"
              className="p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
            />
            <input
              type="text"
              name="location"
              value={newItem.location}
              onChange={handleInputChange}
              placeholder="Location"
              className="p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
            />
            <input
              type="number"
              name="cost"
              value={newItem.cost}
              onChange={handleInputChange}
              placeholder="Cost"
              className="p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
            />
            <div className="flex justify-center">
              <button
                onClick={handleAddItem}
                className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500"
                style={{ width: "150px" }}
              >
                Add Item
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-md mt-6 w-full sm:w-1/2 flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Cost Analyzer
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Total Cost: <b>₹{total.toFixed(2)}</b>
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Tax (10%): <b>₹{tax.toFixed(2)}</b>
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Total with Tax: <b>₹{totalWithTax.toFixed(2)}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
