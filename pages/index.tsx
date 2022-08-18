import { useCallback, useEffect, useState } from "react";
import { Barcode } from "../types/models/barcode";
import ScanButton from "./components/buttons/ScanButton";
import MainNavbar from "./components/navbar/MainNavbar";
import ScannerDialog from "./components/scanner/ScannerDialog";
import moment from "moment";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const fakes: Barcode[] = [
  { data: "00000", formatId: 9, format: "EAN-13", date: new Date() },
  {
    data: "123456 7sdfdwfdsf klhdslfhsdflh sdlkfh lsdhfldkshflhsl kfhdklfhldskhflhdshflhdslhflksd hlfsdkhflkds hflkhsdlkf hlkdshflhsdhflkshd lkfhlsdhlf dlh891234567sdfdwfdsfklhdsl hsdflhsdlkfhls dhfldkshflh slkfhdklfhldskhflh dshflhdslhflks dhlfsdkhflkdshflkhsdlkf hlkdshflhsdhflksh dlkfhlsdhlfdlh89",
    formatId: 9,
    format: "EAN-13",
    date: new Date(),
  },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
  { data: "123456789", formatId: 9, format: "EAN-13", date: new Date() },
];

export default function Home() {
  const [barcodes, setBarcodes] = useState<Barcode[]>(fakes);
  const [open, setOpen] = useState(false);

  const onBarcodeScanned = useCallback(
    (barcode: Barcode) => {
      setBarcodes((prevBarcodes) => [barcode, ...prevBarcodes]);
    },
    [barcodes]
  );

  useEffect(() => {
    const content = document.getElementById("content")!;

    disableBodyScroll(document.body, {
      allowTouchMove: (el) => el.id === "content" || content.contains(el),
    });
  }, []);

  return (
    <div className="h-screen w-full flex flex-col">
      <ScannerDialog
        open={open}
        setOpen={setOpen}
        onBarcodeScanned={onBarcodeScanned}
      />

      <MainNavbar />

      <div id="content" className="pb-2 w-full overflow-y-scroll">
        {barcodes.map((barcode) => (
          <div className="rounded-md shadow-md mx-4 my-4 py-4 px-6 border-neutral-400">
            <div className="mb-2 flex flex-row w-full justify-start items-start">
              <span className="rounded bg-purple-400 text-sm mr-2 px-2 whitespace-nowrap text-white font-medium p-1">
                {barcode.format}
              </span>
              {barcode.data}
            </div>

            <div className="text-gray-600 text-xs">
              {moment(barcode.date).format("D MMMM YYYY, HH:mm")}
            </div>
          </div>
        ))}
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
