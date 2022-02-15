import React from "react";
import { FaGrinStars } from "react-icons/fa";

import IconSection from "../../components/IconSection";

import { data } from "../../utils/columnsData";

const HomeScreen = () => {
  return (
    <div className=" d-flex flex-column text-center justify-content-center align-items-center ">
      <h3 className="mb-5">
        Pick one of our cool options so you can learn more about the Universe
        <FaGrinStars />
      </h3>
      <IconSection icons={data} color="text-light" />
    </div>
  );
};

export default HomeScreen;
