import SideBar from "@/app/components/sidebar"

export default function PaymentPendingPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50 p-4">
        <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl p-8 transition duration-300 ease-in-out">
          <h1 className="text-4xl font-extrabold text-amber-950 mb-4">Aguardando Confirmação de Pagamento</h1>
          <p className="text-gray-700 text-justify leading-relaxed mb-6">
            Seu pagamento está sendo processado. Isso pode levar alguns minutos. Assim que for confirmado, você terá acesso completo à plataforma.
          </p>
          
          <div className="flex items-center justify-center mb-6">
            <svg
              className="w-16 h-16 text-amber-600 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
          </div>
  
          <div className="text-center">
            <p className="text-sm text-gray-600">Você será redirecionado automaticamente assim que o pagamento for aprovado.</p>
          </div>
        </div>
      </div>
    )
  }
  