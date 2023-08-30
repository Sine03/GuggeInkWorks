import React from "react";

export default function Wowb() {
  return (
    <div className="bg-white p-8 text-center min-h-screen">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Kontakter</h1>
        <div className="text-left mb-4">
          <h2 className="text-xl font-semibold">Adress:</h2>
          <p>Hornsgatan 108</p>
          <p>11726 Stockholm</p>
        </div>
        <div className="text-left mb-4">
          <h2 className="text-xl font-semibold">Telefon:</h2>
          <p>0706-35 3434</p>
        </div>
        <div className="text-left mb-4">
          <h2 className="text-xl font-semibold">Öppettider:</h2>
          <p>Mån-Fre 13-18</p>
          <p>Obs! Vi kan vara flexibla om ni önskar andra tider.</p>
        </div>
      </div>
    </div>
  );
}
