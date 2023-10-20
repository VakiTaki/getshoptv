import MainPage from "./components/layouts/mainPage";
import "./index.css";

function App() {
  return (
    <div className=" flex justify-center items-center h-screen w-screen bg-[#ff9300]">
      <div className=" w-[1280px] h-[720px] border shadow-md  ">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
