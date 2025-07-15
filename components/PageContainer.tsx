import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageContainer({ children }: Props) {
  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 md:p-8">{children}</div>
  );
}
