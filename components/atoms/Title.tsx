import React from "react";

import {
  ComponentProps,
  registerUniformComponent,
} from "@uniformdev/canvas-react";

export type TitleType = {
  title: string;
  htmlTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

type ListItemProps = ComponentProps<TitleType>;

const Title: React.FC<ListItemProps> = ({ title, htmlTag }) => {
  const validHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const safeHeading = htmlTag ? htmlTag.toLowerCase() : "";
  const heading = validHeadingLevels.includes(safeHeading) ? safeHeading : "p";
  const TitleComponent = React.createElement(heading, null, title);
  return <div className="text-5xl">{TitleComponent}</div>;
};

registerUniformComponent({
  type: "title",
  component: Title,
});

export default Title;
