import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Space } from "antd";
import { useState } from "react";
import styles from "./AddEvent.module.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const AddEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  let data = {
    eventName,
    eventDescription,
    startDate,
    time,
    duration,
    location,
  };
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
                  value={eventName}
                  onChange={(event) => {
                    setEventName(event.target.value);
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
                  value={eventDescription}
                  onChange={(event) => {
                    setEventDescription(event.target.value);
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
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
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="time"
                label="Time"
                rules={[
                  {
                    required: true,
                    message: "please enter event time",
                  },
                ]}
              >
                <Input
                  placeholder="Event Time"
                  value={time}
                  onChange={(event) => {
                    setTime(event.target.value);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="duration"
                label="Duration"
                rules={[
                  {
                    required: true,
                    message: "please enter event duration",
                  },
                ]}
              >
                <Input
                  placeholder="Event Duration"
                  value={duration}
                  onChange={(event) => {
                    setDuration(event.target.value);
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="location"
                label="Location"
                rules={[
                  {
                    required: true,
                    message: "Please enter event location",
                  },
                ]}
              >
                <Input
                  placeholder="Event Location"
                  value={location}
                  onChange={(event) => {
                    setLocation(event.target.value);
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default AddEvent;
