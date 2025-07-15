import Card from "@/components/ui/Card";

interface MetricCardProps {
  label: string;
  value: number | string;
}

export default function MetricCard({ label, value }: MetricCardProps) {
  return (
    <Card className="text-center">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </Card>
  );
}
