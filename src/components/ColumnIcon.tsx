import React from "react";
import { Col } from "react-bootstrap";

import DynamicIcon from "./DinamicIcon";

interface Props {
  id: number;
  iconName: string;
  title: string;
  background: string;
  color: string;
  description: string;
}

const ColumIcon = ({
  id,
  iconName,
  title,
  background,
  color,
  description,
}: Props) => {
  const stylesToApply = ` text-center mx-auto  ${color} rounded shadow`;
  return (
    <Col
      className={stylesToApply}
      md={3}
      style={{ background: background }}
      onClick={() => console.log(id)}
    >
      <DynamicIcon icon={iconName} size="50px" style={{ margin: 15 }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </Col>
  );
};

export default ColumIcon;
