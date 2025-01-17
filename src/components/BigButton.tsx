import { FC } from "react"

interface BT {
  onclick: Function
  title: string
}

const BigButton: FC<BT> = ({ onclick, title }) => {
  return (
    <button
      className="p-2 bg-green-400 hover:bg-green-500 shadow hover:shadow-black rounded-lg text-white text-4xl active:scale-95 active:shadow-none transition-all"
      onClick={() => onclick()}
      title="คลิกเพื่อสุ่ม"
    >
      {title}
    </button>
  );
}

export default BigButton