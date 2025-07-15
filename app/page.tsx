import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    imageSrc: "/next.svg",
    title: "Producto 1",
    price: 100,
    installmentText: "12 cuotas de $10",
  },
  {
    id: 2,
    imageSrc: "/vercel.svg",
    title: "Producto 2",
    price: 200,
    installmentText: "12 cuotas de $20",
  },
  {
    id: 3,
    imageSrc: "/globe.svg",
    title: "Producto 3",
    price: 300,
    installmentText: "12 cuotas de $30",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen grid md:grid-cols-[200px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <PageContainer>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </PageContainer>
        <Footer />
      </div>
    </div>
  );
}
