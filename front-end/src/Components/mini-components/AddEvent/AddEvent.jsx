import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Select, Space } from "antd";
import { DatePicker } from "antd";
import { useState } from "react";
import styles from "./AddEvent.module.css";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const AddEvent = () => {
  const [clubName, setClubName] = useState("");
  const [clubDescription, setClubDescription] = useState("");

  let data = { clubName, clubDescription };
  console.log(data);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    console.log(data);
  };
  return (
    <>
      <Button
        className={styles.addButton}
        onClick={showDrawer}
        icon={<PlusOutlined />}
      >
        Add Event
      </Button>
      <Drawer
        className={styles.drawer}
        title="Create a new event"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form
          layout="vertical"
          hideRequiredMark
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: "Please enter event title",
                  },
                ]}
              >
                <Input
                  placeholder="Event Title"
                  value={clubName}
                  onChange={(event) => {
                    setClubName(event.target.value);
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter event description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Event Description."
                  value={clubDescription}
                  onChange={(event) => {
                    setClubDescription(event.target.value);
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="date"
                label="Date"
                rules={[
                  {
                    required: true,
                    message: "please enter event date",
                  },
                ]}
              >
                <DatePicker onChange={onChange} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default AddEvent;
