import React, { useEffect, useState } from "react";
import axios from "axios";
import EdifForm from "./EditForm";
import { SortAscendingIcon } from "@heroicons/react/solid";

function Customers({ customers, setCustomers }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [person, setPerson] = useState({});
  const [selected, setSelected] = useState("");
  const [sortbyFirstName, setSortbyFirstName] = useState(false);
  const [sortbyLastName, setSortbyLastName] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/customers")
      .then((res) => setCustomers(res.data));
  }, []);
  const onDelete = async (id) => {
    await axios
      .delete(`http://localhost:4000/customer/${id}`)
      .then((res) => setCustomers(res.data.customers));
  };

  return (
    <div className="mt-8">
      <div className="flex flex-col">
        <h2 className="text-blue-900 font-bold uppercase text-center">
          List of customers
        </h2>
        <select
          onChange={(e) => setSelected(e.target.value)}
          className="cursor-pointer"
        >
          <option disabled={true} selected>
            Select option to filter
          </option>
          <option className="cursor-pointer" value="firstName">
            firstName
          </option>
          <option className="cursor-pointer" value="email">
            email
          </option>
          <option className="cursor-pointer" value="">
            none
          </option>
        </select>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  {selected == "firstName" ? (
                    <tr>
                      <th
                        onClick={() => {
                          setSortbyFirstName(true);
                          setSortbyLastName(false);
                        }}
                        scope="col"
                        className="cursor-pointer px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                      >
                        First Name
                      </th>
                    </tr>
                  ) : selected == "email" ? (
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Email Address
                      </th>
                    </tr>
                  ) : (
                    <tr>
                      <th
                        onClick={() => {
                          setSortbyFirstName(true);
                          setSortbyLastName(false);
                        }}
                        scope="col"
                        className="flex gap-4 cursor-pointer px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                      >
                        First Name{" "}
                        <SortAscendingIcon className="md:w-5 md:mr-2 " />
                      </th>
                      <th
                        scope="col"
                        onClick={() => {
                          console.log("clicked");
                          setSortbyFirstName(false);
                          setSortbyLastName(true);
                        }}
                        className=" cursor-pointer px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                      >
                        <span className="flex gap-4">
                          Last Name{" "}
                          <SortAscendingIcon className="md:w-5 md:mr-2 " />
                        </span>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Mobile No.
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Email Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Country
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  )}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortbyFirstName ? (
                    <>
                      {customers
                        .sort((a, b) => {
                          return a.firstName.localeCompare(b.firstName);
                        })
                        .map((person) => (
                          <>
                            {selected == "firstName" ? (
                              <tr key={person.mobile}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {person.firstName}
                                </td>
                              </tr>
                            ) : selected == "email" ? (
                              <tr key={person.mobile}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {person.email}
                                </td>
                              </tr>
                            ) : (
                              <tr key={person.mobile}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {person.firstName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {person.lastName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {person.mobile}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {person.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {person.country}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <button
                                    onClick={() => {
                                      setPerson(person);
                                      setIsModalVisible(true);
                                    }}
                                    className="text-indigo-600 hover:text-indigo-900"
                                  >
                                    Edit
                                  </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <button
                                    onClick={() => onDelete(person._id)}
                                    className="text-red-600 hover:text-red-900"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            )}
                          </>
                        ))}
                    </>
                  ) : sortbyLastName ? (
                    <>
                      {customers
                        .sort((a, b) => {
                          return a.lastName.localeCompare(b.lastName);
                        })
                        .map((person) => (
                          <>
                            {selected == "firstName" ? (
                              <tr key={person.mobile}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {person.firstName}
                                </td>
                              </tr>
                            ) : selected == "email" ? (
                              <tr key={person.mobile}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {person.email}
                                </td>
                              </tr>
                            ) : (
                              <tr key={person.mobile}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {person.firstName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {person.lastName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {person.mobile}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {person.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {person.country}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <button
                                    onClick={() => {
                                      setPerson(person);
                                      setIsModalVisible(true);
                                    }}
                                    className="text-indigo-600 hover:text-indigo-900"
                                  >
                                    Edit
                                  </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <button
                                    onClick={() => onDelete(person._id)}
                                    className="text-red-600 hover:text-red-900"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            )}
                          </>
                        ))}
                    </>
                  ) : (
                    <>
                      {customers.map((person) => (
                        <>
                          {selected == "firstName" ? (
                            <tr key={person.mobile}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {person.firstName}
                              </td>
                            </tr>
                          ) : selected == "email" ? (
                            <tr key={person.mobile}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {person.email}
                              </td>
                            </tr>
                          ) : (
                            <tr key={person.mobile}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {person.firstName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {person.lastName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {person.mobile}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {person.email}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {person.country}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                  onClick={() => {
                                    setPerson(person);
                                    setIsModalVisible(true);
                                  }}
                                  className="text-indigo-600 hover:text-indigo-900"
                                >
                                  Edit
                                </button>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                  onClick={() => onDelete(person._id)}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          )}
                        </>
                      ))}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && (
        <EdifForm
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          person={person}
          setCustomers={setCustomers}
        />
      )}
    </div>
  );
}

export default Customers;
