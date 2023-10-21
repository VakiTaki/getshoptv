export function validateRussianPhoneNumber(phoneNumber: string): boolean {
  const regex = /^9[0-9]{9}$/;
  phoneNumber = phoneNumber.replace(/[\s-]/g, "");
  return regex.test(phoneNumber);
}
