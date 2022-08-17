import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import MainNavbar from "./components/navbar/MainNavbar";
import { BiBarcodeReader } from "react-icons/bi";

export default function Home() {
  useEffect(() => {
    const resultElement = document.getElementById("result");
    const readerElement = document.getElementById("reader");
    if (!resultElement || !readerElement) return;

    function onScanSuccess(decodedText: string, decodedResult: any) {
      const result = `Code matched = ${decodedText}<br />Result: ${JSON.stringify(
        decodedResult
      )}`;
      console.log(result);

      resultElement!.innerHTML = result;
    }

    function onScanFailure(error: any) {
      const err = `Code scan error = ${error}`;
      console.warn(err);
      resultElement!.innerHTML = err;
    }

    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        supportedScanTypes: [],
      },
      false
    );

    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  }, []);

  return (
    <div>
      <main>
        <MainNavbar />

        {/* <div
          id="reader"
          style={{ width: "100%", marginLeft: 16, marginRight: 16 }}
        /> */}
        <div
          id="result"
          style={{ margin: 16, border: "1px solid #ddd", padding: 12 }}
        ></div>
      </main>

      <div className="min-h-full"></div>

      <footer className="flex flex-col items-end max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 fixed bottom-0 left-0 right-0">
        <button
          className="rounded-full px-4 py-2 mb-4 drop-shadow-xl flex row items-center"
          style={{ backgroundColor: "#6366F1" }}
        >
          <BiBarcodeReader color="white" size={16} className="mr-2" />
          <span
            className="text-white tracking-wide"
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
