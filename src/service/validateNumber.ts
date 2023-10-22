import axios from "axios";

export const validatePhoneNumber = async (phoneNumber: string) => {
  if (process.env.NODE_ENV === "development") {
    try {
      const { data } = await axios.get(
        `http://apilayer.net/api/validate?access_key=c38962194ffd030e09c4b7be98795d95&number=${phoneNumber}&country_code=RU&format=1`
      );
      return data?.valid;
    } catch (error) {
      console.log(error);
    }
  } else {
    return true;
  }
};
