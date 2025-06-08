import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import SideBar from '../components/sidebar'

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex bg-amber-50 text-stone-800">

      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-xl w-full animate-fade-in">
          <div className="flex flex-col items-center text-center gap-6">
            <CheckCircle className="text-amber-600 w-16 h-16" />
            <h1 className="text-4xl font-bold text-amber-800">Pagamento Concluído!</h1>
            <p className="text-justify text-lg text-stone-700 leading-relaxed">
              Obrigado por sua confiança. Sua assinatura foi ativada com sucesso.
              Agora você tem acesso total à nossa plataforma.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="/home" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Ir para o painel
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
