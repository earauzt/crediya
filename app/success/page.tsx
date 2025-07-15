import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";

export default function SuccessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContainer>
        <h1 className="text-xl font-semibold mb-4 text-center">¡Compra exitosa!</h1>
        <p className="text-center">Pronto recibirás un correo con los detalles de tu compra.</p>
      </PageContainer>
      <Footer />
    </div>
  );
}
