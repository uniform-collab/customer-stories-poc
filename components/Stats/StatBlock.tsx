interface StatItemProps {
  label: string;
  value: string;
}

const StatBlock: React.FC<StatItemProps> = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-4xl font-bold text-blue-600">{value}</span>
    <p className="mt-2 text-sm text-gray-600 text-center max-w-[200px]">
      {label}
    </p>
  </div>
);

export default StatBlock;
