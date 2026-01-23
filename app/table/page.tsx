"use client";
import { Flex, Table, Tag, Button, Tooltip } from "antd";
import type { TableProps } from "antd";
import { useMemo } from "react";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
export default function TablePage() {
  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: 80,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 200,
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <Flex gap="small" align="center" wrap>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </Flex>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: 200,
      render: (_, record) => (
        <div>
          <Tooltip title="View">
            <Button
              className="mr-2"
              type="primary"
              variant="solid"
              icon={<EyeOutlined />}
            />
          </Tooltip>
          <Tooltip title="Edit">
            <Button
              className="mr-2"
              color="green"
              variant="solid"
              icon={<EditOutlined />}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button color="danger" variant="solid" icon={<DeleteOutlined />} />
          </Tooltip>
        </div>
      ),
    },
  ];

  const data = useMemo(() => {
    const newData = [] as DataType[];
    for (let index = 0; index < 200; index++) {
      newData.push({
        key: index.toString(),
        name: `Nguyen Van A ${index}`,
        // eslint-disable-next-line react-hooks/purity
        age: Math.floor((Math.random() + 1) * 10),
        // eslint-disable-next-line react-hooks/purity
        address: "Address" + Math.floor((Math.random() + 1) * 10),
        tags: ["dev", "loser", "cool", "teacher"],
      });
    }
    return newData;
  }, []);

  return (
    <div>
      <Table<DataType>
        columns={columns}
        dataSource={data}
        pagination={false}
        virtual
        scroll={{ y: 500 }}
        expandable={{
          columnWidth: 50,
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>
              This is expanded row for {record.name} with age {record.age}
            </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
          expandedRowClassName: () => "border",
        }}
      />
    </div>
  );
}
