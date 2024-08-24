import React from "react";
import {
  ComponentProps,
  registerUniformComponent,
  UniformSlot,
  useUniformContextualEditingState,
  useUniformCurrentComposition,
} from "@uniformdev/canvas-react";

interface SplitContainerProps extends ComponentProps {
  splitType: string;
}

const SplitContainer: React.FC<SplitContainerProps> = ({ splitType }) => {
  const { previewMode } = useUniformContextualEditingState();

  let containerClasses = ["1/3", "2/3"];
  if (splitType === "50-50") {
    containerClasses = ["1/2", "1/2"];
  } else if (splitType === "70-30") {
    containerClasses = ["2/3", "1/3"];
  }
  return (
    <div className={`flex flex-col md:flex-row w-full`}>
      <div className={`w-full md:w-${containerClasses[0]} p-4`}>
        <UniformSlot name="leftContent" />
      </div>
      <div className={`w-full md:w-${containerClasses[1]} p-4`}>
        <UniformSlot name="rightContent" />
      </div>
    </div>
  );
};

registerUniformComponent({
  type: "splitContainer",
  component: SplitContainer,
});

export default SplitContainer;
