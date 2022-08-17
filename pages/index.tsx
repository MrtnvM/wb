import { useState } from "react";
import { BiBarcodeReader } from "react-icons/bi";
import MainNavbar from "./components/navbar/MainNavbar";
import ScannerDialog from "./components/scanner/ScannerDialog";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ScannerDialog open={open} setOpen={setOpen} />

      <MainNavbar />

      <div className="min-h-full"></div>

      <footer className="flex flex-col items-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 fixed bottom-0 left-0 right-0">
        <button
          className="rounded-full px-5 py-3 mb-4 drop-shadow-xl flex row items-center"
          style={{ backgroundColor: "#6366F1" }}
          onClick={() => setOpen(true)}
        >
          <BiBarcodeReader color="white" size={20} className="mr-2" />
          <span
            className="text-white tracking-wide text-lg"
            style={{ fontFamily: "Inter" }}
          >
            Сканировать
          </span>
        </button>
      </footer>

      <div
        className="h-1 fixed bottom-0 left-0 right-0"
        style={{ backgroundColor: "#6366F1" }}
      />
    </div>
  );
}
