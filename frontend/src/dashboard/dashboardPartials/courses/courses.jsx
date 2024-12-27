/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Modal, Table } from "antd";
import axios from "axios";
import { useStateManage } from "../../../context/StateContext";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Courses = () => {
  const { BASE_URL } = useStateManage();
  const [courses, setCourses] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-courses`);
      const formattedCourses = response.data.message.getAllCourses.map((course) => ({
        ...course,
        key: course.id,
        isPublished: course.isPublished ?? true
      }));
      setCourses(formattedCourses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [BASE_URL]);

  const handleEdit = (record) => {
    console.log("Edit course:", record);
  };

  const handleDelete = (record) => {
    setSelectedCourse(record);
    setIsDeleteModalVisible(true);
  };

  const handleDeleteConfirm = async () => {
    const token = localStorage.getItem('AuthToken')
    try {
          await axios.delete(`${BASE_URL}/delete-course/${selectedCourse.id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          setCourses(prevCourses => 
        prevCourses.filter(course => course.id !== selectedCourse.id)
      );
      
      setIsDeleteModalVisible(false);
      setSelectedCourse(null);
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const columns = [
    {
      title: "Course Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title)
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      filters: [...new Set(courses.map(course => course.category))].map(category => ({
        text: category,
        value: category
      })),
      onFilter: (value, record) => record.category === value
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      render: (price) => `$${price.toFixed(2)}`
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      render: (duration) => `${duration} hours`,
      sorter: (a, b) => a.duration - b.duration
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (thumbnail) => (
        <img
          src={thumbnail}
          alt="Course thumbnail"
          style={{ width: "50px", height: "50px",  borderRadius: "50%", objectFit: "cover" }}
        />
      )
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-4">
          <EditOutlined
            className="text-blue-500 hover:text-blue-700 cursor-pointer text-lg"
            onClick={() => handleEdit(record)}
          />
          <DeleteOutlined
            className="text-red-500 hover:text-red-700 cursor-pointer text-lg"
            onClick={() => handleDelete(record)}
          />
        </div>
      )
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl bg-slate-100 rounded-md shadow-xl p-3 font-bold text-gray-800 mb-4">
        Courses Management
      </h1>
      
      <Table
        columns={columns}
        dataSource={courses}
        loading={loading}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} courses`
        }}
        scroll={{ x: 1000 }}
      />

      <Modal
        title="Confirm Delete"
        open={isDeleteModalVisible}
        onCancel={() => {
          setIsDeleteModalVisible(false);
          setSelectedCourse(null);
        }}
        onOk={handleDeleteConfirm}
        okText="Delete"
        cancelText="Cancel"
        okButtonProps={{ danger: true }}
      >
        <p>
          Are you sure you want to delete the course{' '}
          <span className="font-bold">{selectedCourse?.title}</span>?
        </p>
      </Modal>
    </div>
  );
};

export default Courses;