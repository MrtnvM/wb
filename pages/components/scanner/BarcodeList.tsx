import { Barcode } from "../../../types/models/barcode";
import BarcodeItem from "./BarcodeItem";
import { ImBarcode } from "react-icons/im";

type Props = {
  barcodes: Barcode[];
};

const EmptyState = () => {
  return (
    <div className="flex flex-col w-full p-10">
      <div className="flex flex-col rounded-xl py-12 px-4 border-dashed border-2 border-gray-400 bg-gray-100 items-center justify-center">
        <ImBarcode size={64} color="#333" />
        <div className="mx-8 text-center text-gray-600">
          Здесь будут отображены отсканированные штрихкоды товаров
        </div>
      </div>
    </div>
  );
};

export default function BarcodeList({ barcodes = [] }: Props) {
  if (barcodes.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      {barcodes.map((barcode) => (
        <BarcodeItem barcode={barcode} />
      ))}
    </>
  );
}
