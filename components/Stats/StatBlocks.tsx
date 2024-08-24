import React from "react";
import {
  ComponentProps,
  registerUniformComponent,
} from "@uniformdev/canvas-react";
import { AssetParamValue, BlockValue, flattenValues } from "@uniformdev/canvas";
import StatBlock from "./StatBlock";

type StatBlockItem = {
  description: string;
  stat: string;
};

type StatBlocksProps = ComponentProps<{
  stats: BlockValue;
  logo: AssetParamValue;
  blockColor: string;
}>;

const StatBlocks: React.FC<StatBlocksProps> = ({ logo, blockColor, stats }) => {
  const logoSrc = flattenValues(logo, { toSingle: true })?.url;
  // @ts-expect-error
  const statData = flattenValues(stats) as Array<StatBlockItem>;
  return (
    <div className="relative">
      <div
        className={`w-40 h-40 bg-${blockColor} rounded-lg absolute left-0 top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center`}
      >
        {logoSrc ? (
          <img src={logoSrc} alt="Glovo logo" className="w-32" />
        ) : null}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg ml-32">
        <div className="flex items-center space-x-8 pl-12">
          {(statData || []).map((s, index) => (
            <StatBlock key={index} label={s?.description} value={s?.stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

registerUniformComponent({
  type: "statBlocks",
  component: StatBlocks,
});

export default StatBlocks;
