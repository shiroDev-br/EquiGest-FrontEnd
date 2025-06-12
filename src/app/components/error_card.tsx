"use client";
    
import React, { useEffect } from "react";

interface ErrorCardProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export function ErrorCard({ message, visible, onClose }: ErrorCardProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // 3 segundos

      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div
      id="errorCard"
      className={`fixed top-20 right-5 sm:right-8 max-w-xs w-[90%] sm:w-auto z-50 p-4 bg-red-500 text-white rounded-lg shadow-lg transition-all duration-500 ease-in-out
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}
      `}
    >
      <p className="font-semibold">Erro!</p>
      <p>{message}</p>
    </div>
  );
}
