/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaShoppingCart,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";
import { useStateManage } from "../../context/StateContext";
import { Table } from "antd";

const Dashboard = () => {
  const [Data, setData] = useState({});
  const [studentData, setStudentData] = useState([]);
  const [InstructorData, setInstructorData] = useState([]);
  const { BASE_URL } = useStateManage();

  useEffect(() => {
    const token = localStorage.getItem("AuthToken");
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/get-statistics`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.message);
        setData(response.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [BASE_URL]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/get-all-enrolled-courses`
        );
        setStudentData(response.data.message.studentData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [BASE_URL]);

  useEffect(() => {
    const token = localStorage.getItem("AuthToken");

    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/get-all-instructors`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const modifiedResult = response.data.message.getAllInstructors.map(
          (instructor) => ({
            instructorName: instructor.user.username,
            instructorID: instructor.user.id,
            instructorEmail: instructor.user.email,
          })
        );
        setInstructorData(modifiedResult);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [BASE_URL]);

  const cardData = [
    {
      title: "Total Users",
      value: Data.allUsers,
      icon: FaUsers,
      color: "bg-blue-500",
    },
    {
      title: "Purchased Courses",
      value: Data.purchaseRecords,
      icon: FaShoppingCart,
      color: "bg-green-500",
    },
    {
      title: "Total Revenue",
      value: `$ ${Data.totalRevenew}`,
      icon: FaMoneyBillWave,
      color: "bg-yellow-500",
    },
    {
      title: "Total Courses",
      value: Data.totalCourses,
      icon: FaChartLine,
      color: "bg-red-500",
    },
  ];

  const columns = [
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "Student ID",
      dataIndex: "studentID",
      key: "studentID",
    },
    {
      title: "Email",
      dataIndex: "studentEmail",
      key: "studentEmail",
    },
    {
      title: "Courses Enrolled",
      dataIndex: "courses",
      key: "courses",
      render: (courses) => courses.join(", "),
    },
  ];

  const InstructorColumns = [
    {
      title: "Instructor Name",
      dataIndex: "instructorName",
      key: "instructorName",
    },
    {
      title: "Instructor ID",
      dataIndex: "instructorID",
      key: "instructorID",
    },
    {
      title: "Email",
      dataIndex: "instructorEmail",
      key: "instructorEmail",
    },
  ];

  return (
    <div className="lg:p-4 md:p-4 sm:p-0 p-0">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Overall Analytics
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${card.color} rounded-lg shadow-md p-4 text-white`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="text-3xl font-bold mt-2">{card.value}</p>
              </div>
              <card.icon className="text-4xl opacity-80" />
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">
        Enrolled Students
      </h2>
      <Table
        dataSource={studentData}
        columns={columns}
        rowKey="studentID"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 1000 }}
      />

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          All Instructors
        </h2>
        <Table
          dataSource={InstructorData}
          columns={InstructorColumns}
          rowKey="instructorID"
          pagination={{ pageSize: 10 }}
          scroll={{ x: 1000 }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
