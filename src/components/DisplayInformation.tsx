import React from "react";
import { Col } from "react-bootstrap";
import { Datum, ItemLink } from "../interfaces/search";
import HeaderAndDescription from "./HeaderAndDescription";
import Image from "./Image";
interface Props {
  data: Datum[];
  links?: ItemLink[];
}

const DisplayInformation = ({ data, links }: Props) => {
  return (
    <Col
      xs={12}
      md={8}
      lg={3}
      className="justify-content-center border m-5 p-5 rounded shadow p-3 mb-5 bg-white rounded"
    >
      <HeaderAndDescription data={data} />
      <Image links={links} />
    </Col>
  );
};

export default DisplayInformation;
