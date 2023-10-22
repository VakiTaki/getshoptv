import { getIsPhoneValid, getPhone } from "../../store/slices/appSlice";
import { useAppSelector } from "../../store/hooks";

function PhoneInput() {
  const phone = useAppSelector(getPhone());
  const isPhoneValid = useAppSelector(getIsPhoneValid());
  let formattedText = "+7(___)___-__-__";
  for (let i = 0; i < phone.length; i++) {
    formattedText = formattedText.replace("_", phone[i]);
  }
  return (
    <span
      className={
        " font-bold text-[28px] font-robotoMono " +
        (isPhoneValid ? " text-black " : " text-[#EA0000] ")
      }
    >
      {formattedText}
    </span>
  );
}

export default PhoneInput;
