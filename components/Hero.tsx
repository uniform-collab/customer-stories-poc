import { RichTextParamValue } from "@uniformdev/canvas";
import { UniformRichText } from "@uniformdev/canvas-next";
import {
  registerUniformComponent,
  ComponentProps,
  UniformText,
} from "@uniformdev/canvas-react";

type HeroProps = ComponentProps<{
  title: string;
  description?: RichTextParamValue;
}>;

const Hero: React.FC<HeroProps> = () => (
  <div className="p-32">
    <UniformText
      className="text-3xl font-bold underline"
      parameterId="title"
      as="h1"
      data-test-id="hero-title"
      placeholder="Hero title goes here"
    />
    <UniformRichText
      parameterId="description"
      className="description"
      placeholder="Hero description goes here"
      data-test-id="hero-description"
    />
  </div>
);

registerUniformComponent({
  type: "hero",
  component: Hero,
});

export default Hero;
