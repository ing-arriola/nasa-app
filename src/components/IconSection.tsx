import React from "react";
import { Container, Row } from "react-bootstrap";

import ColumIcon from "./ColumnIcon";

type icon = {
  id: number;
  name: any;
  title: string;
  background: string;
  description: string;
};

interface Props {
  icons: icon[];
  color: string;
}

const IconSection = ({ icons, color }: Props) => {
  return (
    <section>
      <Container>
        <Row>
          {icons.map((icon) => (
            <ColumIcon
              key={icon.id}
              id={icon.id}
              iconName={icon.name}
              title={icon.title}
              background={icon.background}
              color={color}
              description={icon.description}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default IconSection;
