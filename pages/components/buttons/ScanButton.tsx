import { BiBarcodeReader } from "react-icons/bi";

type Props = {
  scan: () => void;
};

export default function ScanButton({ scan }: Props) {
  return (
    <button
      className="rounded-full px-5 py-2 mb-6 drop-shadow-xl flex row items-center"
      style={{ backgroundColor: "#6366F1" }}
      onClick={scan}
    >
      <BiBarcodeReader color="white" size={20} className="mr-2" />
      <span
        className="text-white tracking-wide text-md"
        style={{ fontFamily: "Inter" }}
      >
        Сканировать
      </span>
    </button>
  );
}
