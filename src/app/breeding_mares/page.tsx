import SideBar from "../components/sidebar";
import 'boxicons/css/boxicons.min.css';

export default function BreedingMaresCentralPage() {
  return (
    <div className="min-h-screen w-full flex bg-amber-50">
      <SideBar />

      <div className="flex-1 px-4 md:px-12 pt-8">
        <div>
          <h1 className="text-4xl text-amber-950">Matrizes</h1>
          <hr className="w-32 h-1 mt-2 bg-amber-800 border-0 rounded" />
        </div>

        <div className="mt-62 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-64 md:w-80 p-24 rounded-lg bg-amber-100 cursor-pointer hover:bg-amber-200 transition-colors">
              <div className="flex flex-col items-center justify-center">
                <i className='bx bx-dna text-2xl md:text-4xl mb-2'></i>
                <h1 className="text-xl text-amber-950 text-center">Registrar Matriz</h1>
              </div>
            </div>

            <div className="w-64 md:w-80 p-24 rounded-lg bg-amber-100 cursor-pointer hover:bg-amber-200 transition-colors">
              <div className="flex flex-col items-center justify-center">
                <i className='bx bx-grid-alt text-2xl md:text-4xl mb-2'></i>
                <h1 className="text-xl text-amber-950 text-center">Visualizar Matrizes</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
