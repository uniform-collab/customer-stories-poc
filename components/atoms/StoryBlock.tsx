import React, { FC } from "react";
import {
  Next,
  documentToHtmlString,
  Options,
} from "@contentful/rich-text-html-renderer";
import { BLOCKS, NodeData } from "@contentful/rich-text-types";
import {
  ComponentProps,
  registerUniformComponent,
} from "@uniformdev/canvas-react";

export type StoryBlock = {
  title: string;
  content?: Document;
};

type StoryBlockProps = ComponentProps<StoryBlock>;

const documentToHtmlStringOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: NodeData, next: Next) =>
      `<p class="pb-10 text-lg">${next(node.content)}</p>`,
    [BLOCKS.HEADING_2]: (node: NodeData, next: Next) =>
      `<h2 class="pb-2.5 text-2xl">${next(node.content)}</h2>`,
    [BLOCKS.EMBEDDED_ASSET]: (node: NodeData) =>
      `<div class="pb-12 lg:pb-16 max-w-4xl">
            <img src="${node.data.target.fields.file.url}" 
                    height="${node.data.target.fields.file.details.image.height}"
                    width="${node.data.target.fields.file.details.image.width}" alt="${node.data.target.fields.description}"/>
          </div>`,
  },
};

export const StoryBlock: FC<StoryBlockProps> = ({ content }) => {
  return (
    <div
      className={
        "text-secondary-content items-center justify-between w-full gap-5 mx-auto lg:flex-nowrap rounded-xl"
      }
    >
      {content ? (
        <div
          className={"py-6 text-xl prose [&>figure]:max-w-full"}
          dangerouslySetInnerHTML={{
            __html:
              typeof content === "string"
                ? content
                : documentToHtmlString(content, documentToHtmlStringOptions),
          }}
        />
      ) : null}
    </div>
  );
};

registerUniformComponent({
  type: "storyBlock",
  component: StoryBlock,
});

export default StoryBlock;
