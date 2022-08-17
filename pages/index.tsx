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

      <footer>
        <button className="rounded-full bg-purple-700 px-4 py-2 fixed bottom-8 right-8 drop-shadow-md flex row items-center">
          <BiBarcodeReader color="white" size={16} className="mr-2" />
          <span className="text-white" style={{ fontFamily: "Inter" }}>
            Сканировать
          </span>
        </button>

        <div className="h-2 fixed bottom-0 left-0 right-0 bg-purple-700"></div>
      </footer>
    </div>
  );
}
