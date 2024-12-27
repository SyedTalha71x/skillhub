/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import { useStateManage } from "../../../context/StateContext";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";


const Courses = () => {
  const { BASE_URL } = useStateManage();
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/get-all-courses`);
        const modifiedResult = response.data.message.getAllCourses.map(
          (course) => ({
            ...course,
            isPublished:
              course.isPublished !== undefined ? course.isPublished : true,
          })
        );
        setData(modifiedResult);
        console.log(modifiedResult);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [BASE_URL]);

  const handleEdit = (courseId) => {
    console.log("Edit clicked for courseId:", courseId);
  };

  const handleDelete = (courseId) => {
    console.log("Delete clicked for courseId:", courseId);
  };

  const columns = [
    {
      title: "Course Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    // {
    //   title: "Description",
    //   dataIndex: "description",
    //   key: "description",
    //   render: (description) => {
    //     return description.length > 100
    //       ? `${description.slice(0, 100)}...`
    //       : description;
    //   },
    // },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (thumbnail) => (
        <img
          src={thumbnail}
          alt="Thumbnail"
          style={{ width: "50px", height: "50px", borderRadius: "50px" }}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <div className="flex gap-4">
          <EditOutlined
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => handleEdit(record.courseId)}
          />
          <DeleteOutlined
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => handleDelete(record.courseId)}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-xl bg-slate-100 rounded-md shadow-xl p-3 font-bold text-gray-800 mb-4">
        Courses
      </h1>
      <Table
        columns={columns}
        dataSource={Data}
        rowKey="courseId"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 1000 }}
      />
    </div>
  );
};

export default Courses;
