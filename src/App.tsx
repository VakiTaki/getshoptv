import withRedux from "./components/hoc/withRedux";
import MainPage from "./components/layouts/mainPage";
import "./index.css";

function App() {
  return (
    <div className=" flex justify-center items-center h-screen w-screen bg-[#ff9300]">
      <MainPage />
    </div>
  );
}
const AppWithStore = withRedux(App);
export default AppWithStore;
