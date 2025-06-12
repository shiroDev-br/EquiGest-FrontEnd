"use client"

import { useState } from "react";
import SideBar from "../../../components/sidebar";
import RegisterBreedingMareForm from "./components/register_form"
import 'boxicons/css/boxicons.min.css';
import { ErrorCard } from "@/app/components/error_card";

export default function BreedingMaresCentralPage() {
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const showError = (message: string) => {
        setErrorMessage(message);
        setErrorVisible(true);
    };
    
  return (
    <div className="min-h-screen w-full flex bg-amber-50">
      <SideBar />
      <ErrorCard
          visible={errorVisible}
          message={errorMessage}
          onClose={() => setErrorVisible(false)}
    />

      <div className="flex-1 px-4 md:px-12 pt-8">
        <div>
          <h1 className="text-4xl text-amber-950">Matrizes</h1>
          <hr className="w-32 h-1 mt-2 bg-amber-800 border-0 rounded" />
        </div>

        <div className="mt-52 flex justify-center items-center">
          <RegisterBreedingMareForm showError={showError} />
        </div>
      </div>
    </div>
  );
}
