import React, { useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import axios from "axios";

function Customer({ setCustomers }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const [mobile, setMobile] = useState("");

  const handleSubmit = async () => {
    await axios
      .post("/customer", {
        firstName,
        lastName,
        mobile,
        email,
        country,
      })
      .then((res) => setCustomers(res.data.customers));
  };
  return (
    <div className="">
      <div className="bg-gray-400 shadow-lg">
        <form className="  m-8 h-full">
          <div className="">
            <div className="pt-4">
              <div>
                <h3 className="text-lg leading-6  text-gray-900 font-bold">
                  Customer Information
                </h3>
                <p className="mt-1 text-sm text-gray-900">
                  Functional Specifications for CRM
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="names"
                      onChange={(e) => setFirstName(e.target.value)}
                      id="first-name"
                      placeholder="Enter your first Name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-96 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="specification"
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter your last name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-96 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="timings"
                      id="street-address"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-96 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="charges"
                      id="city"
                      placeholder="Enter your country"
                      onChange={(e) => setCountry(e.target.value)}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-96 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mobile Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="charges"
                      id="city"
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Enter your Mobile number"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-96 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-12">
            <div className="flex gap-6 ">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Clear All
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Customer;
