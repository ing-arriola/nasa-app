import React from "react";
import { Datum } from "../../interfaces/search";

interface Props {
  data: Datum[];
}

const HeaderAndDescription = ({ data }: Props) => (
  <>
    {data.map((info) => (
      <div key={info.nasa_id}>
        <h3 className="text-truncate">{info.title}</h3>
        <p>{info.description.substring(0, 200)}</p>
      </div>
    ))}
  </>
);

export default HeaderAndDescription;
