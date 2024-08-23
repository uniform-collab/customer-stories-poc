import React from "react";
import {
  ComponentProps,
  registerUniformComponent,
} from "@uniformdev/canvas-react";
import { AssetParamValue, BlockValue, flattenValues } from "@uniformdev/canvas";

interface StatItem {
  label: string;
  value: string;
}

interface StatItemProps {
  label: string;
  value: string;
}

interface StatBlocksProps extends ComponentProps {
  stats: BlockValue[];
  logo: AssetParamValue;
  blockColor: string;
}

const StatBlock: React.FC<StatItemProps> = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-4xl font-bold text-blue-600">{value}</span>
    <p className="mt-2 text-sm text-gray-600 text-center max-w-[200px]">
      {label}
    </p>
  </div>
);

const StatBlocks: React.FC<StatBlocksProps> = ({ logo, blockColor, stats }) => {
  const logoSrc = flattenValues(logo, { toSingle: true })?.url;
  const statData = flattenValues(stats);
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
