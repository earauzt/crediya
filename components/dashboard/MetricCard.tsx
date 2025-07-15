interface Props {
  label: string;
  value: number | string;
}

export default function MetricCard({ label, value }: Props) {
  return (
    <div className="p-4 border rounded-md bg-white shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
