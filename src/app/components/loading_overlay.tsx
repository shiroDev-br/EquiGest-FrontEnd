import { Loader2 } from "lucide-react";

export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-amber-50 bg-opacity-80 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4 p-6 bg-amber-100 rounded-xl shadow-lg border border-amber-200">
        <Loader2 className="h-10 w-10 text-amber-950 animate-spin" />
        <p className="text-amber-950 text-lg font-medium">
          Aguarde alguns instantes...
        </p>
      </div>
    </div>
  );
}
