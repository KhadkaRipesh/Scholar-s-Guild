import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Select, Space } from "antd";
import { useState } from "react";
import styles from "./AddClub.module.css";
import ClubLogo from "./ClubLogo";
const AddClub = () => {
  const [clubName, setClubName] = useState("");
  const [clubDescription, setClubDescription] = useState("");
  const [image, setImage] = useState("");
  // image problem occuring here.
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
        Add Club
      </Button>
      <Drawer
        className={styles.drawer}
        title="Create a new club"
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
                name="image"
                label="Image"
                rules={[
                  {
                    required: true,
                    message: "Please enter club image",
                  },
                ]}
              >
                <ClubLogo />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter club name",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter club name"
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
                    message: "please enter club description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter club description."
                  value={clubDescription}
                  onChange={(event) => {
                    setClubDescription(event.target.value);
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
export default AddClub;
