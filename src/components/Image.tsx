import React from "react";
import { ItemLink } from "../interfaces/search";

import nasa from "../assets/nasa-logo.svg";

interface Props {
  links?: ItemLink[];
}

const fallBackImage = (
  <div>
    <img src={nasa} style={{ height: 250, width: 250 }} />
  </div>
);

const Image = ({ links }: Props) => {
  return (
    <>
      {links
        ? links.map((link) => (
            <div key={link.href}>
              {link.href.endsWith("jpg") && (
                <img
                  src={link.href}
                  className="img-thumbnail"
                  style={{ height: 300, width: 300 }}
                />
              )}
            </div>
          ))
        : fallBackImage}
    </>
  );
};

export default Image;
