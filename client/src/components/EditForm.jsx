import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import axios from "axios";

const EdifForm = ({
  isModalVisible,
  setIsModalVisible,
  person,
  setCustomers,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const [mobile, setMobile] = useState("");

  useEffect(() => {
    setFirstName(person.firstName);
    setLastName(person.lastName);
    setEmail(person.email);
    setCountry(person.country);
    setMobile(person.mobile);
  }, []);

  const handleOk = async () => {
    await axios
      .put(`/customer/${person._id}`, {
        firstName,
        lastName,
        mobile,
        email,
        country,
      })
      .then((res) => {
        setCustomers(res.data.customers);
        setIsModalVisible(false);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Edit Customer Details"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <form>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                value={firstName}
                id="name"
                onChange={(e) => setFirstName(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your Name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="standard"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                value={lastName}
                id="name"
                onChange={(e) => setLastName(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your standard"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="account-number"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="account-number"
                value={email}
                id="account-number"
                onChange={(e) => setEmail(e.target.value)}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="000-00-0000"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <QuestionMarkCircleIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="standard"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                value={country}
                id="name"
                onChange={(e) => setCountry(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your standard"
              />
            </div>
          </div>{" "}
          <div>
            <label
              htmlFor="standard"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                value={mobile}
                id="name"
                onChange={(e) => setMobile(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your standard"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleOk}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
};

export default EdifForm;
