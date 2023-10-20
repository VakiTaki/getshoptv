import { XMarkIcon } from "@heroicons/react/24/solid";
import qr from "../images/qr.svg";

type Props = { isShow: boolean; setIsShowPromo: (b: boolean) => void };

function Promo({ isShow, setIsShowPromo }: Props) {
  console.log(isShow);
  const handleClose = () => {
    setIsShowPromo(false);
  };
  return (
    <>
      <div className=" absolute z-10 h-full w-full top-0 left-0  flex justify-between   ">
        <div
          className={
            " absolute top-0  bg-[#86D3F4] w-[30%] h-full  transition-all duration-1000" +
            (isShow ? " left-0 " : " -left-[200%] invisible  ")
          }
        >
          Promo
        </div>
        <div
          className={
            " absolute  right-0 bg-white w-[88px] h-[52px] mt-5 mr-5 flex justify-center items-center hover:opacity-70  shadow-md transition-all duration-1000 " +
            (isShow ? " top-0 " : " -top-[200%] invisible  ")
          }
          onClick={handleClose}
        >
          <XMarkIcon className=" h-6 w-6  " />
        </div>
        <div
          className={
            " absolute  bottom-[40px] w-[300px]  transition-all duration-1000 cursor-pointer   " +
            (isShow ? " right-[40px] " : " -right-[200%] invisible ")
          }
        >
          <img src={qr} alt="Баннер" className="   object-contain" />
        </div>
      </div>
    </>
  );
}

export default Promo;
