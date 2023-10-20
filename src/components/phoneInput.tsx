import React from "react";

type Props = { phone: string };

function PhoneInput({ phone }: Props) {
  let formattedText = "+7(___)___-__-__";
  for (let i = 0; i < phone.length; i++) {
    formattedText = formattedText.replace("_", phone[i]);
  }
  return <span className=" font-bold text-[28px] ">{formattedText}</span>;
}

export default PhoneInput;
