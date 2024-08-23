import {
  registerUniformComponent,
  UniformSlot,
  type ComponentProps,
} from "@uniformdev/canvas-react";

type PageCompositionProps = ComponentProps;

const PageComposition: React.FC<PageCompositionProps> = () => (
  <div>
    <UniformSlot name="content" />
  </div>
);

registerUniformComponent({
  type: "page",
  component: PageComposition,
});

export default PageComposition;
