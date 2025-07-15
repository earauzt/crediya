import { InputText, InputPassword, Input2FA, ButtonPrimary } from "@/src/components/ui";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContainer>
        <form className="mx-auto max-w-sm flex flex-col gap-4">
          <InputText type="email" placeholder="Email" required />
          <InputPassword placeholder="Contraseña" required />
          <Input2FA placeholder="Código 2FA (opcional)" />
          <ButtonPrimary type="submit">Ingresar</ButtonPrimary>
        </form>
      </PageContainer>
      <Footer />
    </div>
  );
}
