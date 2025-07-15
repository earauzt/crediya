interface Transaction {
  id: string;
  date: string;
  amount: number;
  status: string;
}

interface Props {
  transactions: Transaction[];
}

export default function TransactionsTable({ transactions }: Props) {
  return (
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="text-left">
          <th className="p-2 border-b">ID</th>
          <th className="p-2 border-b">Fecha</th>
          <th className="p-2 border-b">Monto</th>
          <th className="p-2 border-b">Estado</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id} className="odd:bg-gray-50">
            <td className="p-2 border-b">{t.id}</td>
            <td className="p-2 border-b">{t.date}</td>
            <td className="p-2 border-b">${t.amount.toFixed(2)}</td>
            <td className="p-2 border-b">{t.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
