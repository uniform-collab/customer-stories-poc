import {
  registerUniformComponent,
  UniformSlot,
  type ComponentProps,
} from "@uniformdev/canvas-react";

type CustomerCompositionProps = ComponentProps<{
  title: string;
}>;

const CustomerStoryComposition: React.FC<CustomerCompositionProps> = () => (
  <div>
    <UniformSlot
      name="content"
      emptyPlaceholder={
        <div style={{ width: 400, height: 100, marginTop: 30 }} />
      }
    />
  </div>
);

registerUniformComponent({
  type: "customerStory",
  component: CustomerStoryComposition,
});

export default CustomerStoryComposition;
