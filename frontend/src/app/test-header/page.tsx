import { Header } from '@/components/header/header';

export default function TestHeaderPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-[80px]">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4" data-testid="test-page-title">
            Teste do Header
          </h1>
          <p className="text-gray-600">
            Header fixo no topo. Redimensione a janela para testar responsividade.
          </p>
        </div>
      </main>
    </>
  );
}
