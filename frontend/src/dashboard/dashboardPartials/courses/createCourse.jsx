/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Input, Button, Select, InputNumber, Row, Col, Collapse, message } from "antd";
import axios from "axios";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useStateManage } from "../../../context/StateContext";

const { TextArea } = Input;
const { Panel } = Collapse;

const CreateCourse = () => {
  const { BASE_URL } = useStateManage();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const token = localStorage.getItem("AuthToken");
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/create-course`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      message.success("Course created successfully!");
      form.resetFields();
      console.log("API Response:", response.data);
    } catch (error) {
      message.error(
        error.response?.data?.message || "Failed to create the course. Please try again."
      );
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-xl bg-slate-100 rounded-md shadow-xl p-3 font-bold text-gray-800 mb-4">
        Create Course
      </h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Collapse defaultActiveKey={["1", "2", "3", "4"]}>
          <Panel header="Course Details" key="1">
            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Course Title"
                  name="title"
                  rules={[{ required: true, message: "Please enter the course title!" }]}
                >
                  <Input placeholder="Enter course title" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Category"
                  name="category"
                  rules={[{ required: true, message: "Please select a category!" }]}
                >
                  <Select placeholder="Select category">
                    <Select.Option value="Programming">Programming</Select.Option>
                    <Select.Option value="Automation">Automation</Select.Option>
                    <Select.Option value="Cloud Computing">Cloud Computing</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please enter the course description!" }]}
            >
              <TextArea rows={4} placeholder="Enter course description" />
            </Form.Item>
          </Panel>

          <Panel header="Pricing & Duration" key="2">
            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Price ($)"
                  name="price"
                  rules={[{ required: true, message: "Please enter the course price!" }]}
                >
                  <InputNumber
                    placeholder="Enter price"
                    style={{ width: "100%" }}
                    min={0}
                    max={10000}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Duration (hours)"
                  name="duration"
                  rules={[{ required: true, message: "Please enter the course duration!" }]}
                >
                  <InputNumber
                    placeholder="Enter duration"
                    style={{ width: "100%" }}
                    min={0}
                    max={100}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Panel>

          <Panel header="Thumbnail & Published Status" key="3">
            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Thumbnail URL"
                  name="thumbnail"
                  rules={[{ required: true, message: "Please provide a thumbnail URL!" }]}
                >
                  <Input placeholder="Enter thumbnail URL" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Published"
                  name="published"
                  rules={[{ required: true, message: "Please select the published status!" }]}
                >
                  <Select placeholder="Select status">
                    <Select.Option value="true">True</Select.Option>
                    <Select.Option value="false">False</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Panel>

          <Panel header="Syllabus" key="4">
            <Form.List name="modules">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div
                      key={key}
                      style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom: "10px",
                      }}
                    >
                      <Row gutter={16}>
                        <Col xs={24} md={12}>
                          <Form.Item
                            {...restField}
                            label="Module Title"
                            name={[name, "title"]}
                            rules={[{ required: true, message: "Please enter module title!" }]}
                          >
                            <Input placeholder="Enter module title" />
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                          <Button
                            type="danger"
                            icon={<DeleteOutlined />}
                            onClick={() => remove(name)}
                            style={{ marginTop: "30px" }}
                          >
                            Remove Module
                          </Button>
                        </Col>
                      </Row>

                      <Form.List name={[name, "content"]}>
                        {(contentFields, { add: addContent, remove: removeContent }) => (
                          <>
                            {contentFields.map(({ key: contentKey, name: contentName, ...contentRestField }) => (
                              <Row key={contentKey} gutter={16}>
                                <Col xs={20}>
                                  <Form.Item
                                    {...contentRestField}
                                    label="Content"
                                    name={[contentName]}
                                    rules={[{ required: true, message: "Please enter content!" }]}
                                  >
                                    <Input placeholder="Enter content" />
                                  </Form.Item>
                                </Col>
                                <Col xs={4}>
                                  <Button
                                    type="danger"
                                    icon={<DeleteOutlined />}
                                    onClick={() => removeContent(contentName)}
                                    style={{ marginTop: "30px" }}
                                  />
                                </Col>
                              </Row>
                            ))}
                            <Button
                              type="dashed"
                              onClick={() => addContent()}
                              icon={<PlusOutlined />}
                            >
                              Add Content
                            </Button>
                          </>
                        )}
                      </Form.List>
                    </div>
                  ))}
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add Module
                  </Button>
                </>
              )}
            </Form.List>
          </Panel>
        </Collapse>

        <Form.Item className="mt-4">
          <Button type="primary" htmlType="submit" block loading={loading}>
            Create Course
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateCourse;
