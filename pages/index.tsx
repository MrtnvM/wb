import { useCallback, useState } from "react";
import { Barcode } from "../types/models/barcode";
import ScanButton from "./components/buttons/ScanButton";
import MainNavbar from "./components/navbar/MainNavbar";
import ScannerDialog from "./components/scanner/ScannerDialog";
import BarcodeList from "./components/scanner/BarcodeList";
import { useOverscrollHandler } from "../hooks/useOverscrollHandler";

export default function Home() {
  const [barcodes, setBarcodes] = useState<Barcode[]>([]);
  const [open, setOpen] = useState(false);

  useOverscrollHandler();

  const onBarcodeScanned = useCallback(
    (barcode: Barcode) => {
      setBarcodes((prevBarcodes) => [barcode, ...prevBarcodes]);
    },
    [barcodes]
  );

  return (
    <div className="h-screen w-full flex flex-col">
      <ScannerDialog
        open={open}
        setOpen={setOpen}
        onBarcodeScanned={onBarcodeScanned}
      />

      <MainNavbar />

      <div id="content" className="pb-2 w-full overflow-y-scroll">
        <BarcodeList barcodes={barcodes} />
      </div>

      <footer className="flex flex-col items-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 fixed bottom-0 left-0 right-0">
        <ScanButton scan={() => setOpen(true)} />
      </footer>

      <div
        className="h-1 fixed bottom-0 left-0 right-0"
        style={{ backgroundColor: "#6366F1" }}
      />
    </div>
  );
}
