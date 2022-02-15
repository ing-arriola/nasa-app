import React, { useEffect } from "react";
import { commonAPI } from "../../Api/nasaApi";
import { RoversData } from "../../interfaces/rovers";

const RoverScreen = () => {
  const getRoverData = async () => {
    const res = await commonAPI.get<RoversData>(
      `/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=DEMO_KEY`
    );
    console.log(res.data.photos);
  };

  useEffect(() => {
    getRoverData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>RoverScreen</div>;
};

export default RoverScreen;
