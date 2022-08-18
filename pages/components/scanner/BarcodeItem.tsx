import moment from "moment";
import { Barcode } from "../../../types/models/barcode";

type Props = {
  barcode: Barcode;
};

export default function BarcodeItem(props: Props) {
  const { barcode } = props;

  return (
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
  );
}
