import { LinkParamValue } from "@uniformdev/canvas";
import {
  ComponentProps,
  registerUniformComponent,
} from "@uniformdev/canvas-react";
import Link from "next/link";

export type ListItemType = {
  title: string;
  subTitle?: string;
  icon?: Array<{ url: string }>;
  link?: LinkParamValue;
};

type ListItemProps = ComponentProps<ListItemType>;

const ListItem: React.FC<ListItemProps> = (props) => {
  const { title, subTitle, icon, link } = props;
  const iconUrl = icon && icon.length ? icon[0]?.url : "";
  return (
    <Link href={link?.path || ""}>
      <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg">
        <img src={iconUrl} alt={title} className="w-12 h-12 object-contain" />
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600">{subTitle}</p>
        </div>
      </div>
    </Link>
  );
};

registerUniformComponent({
  type: "listItem",
  component: ListItem,
});

export default ListItem;
