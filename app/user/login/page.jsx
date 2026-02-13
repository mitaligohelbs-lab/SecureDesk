import Login from "../../../components/Login/Login";
import { Menu } from "../../../components/Menu";

const page = () => {
  return (
    <>
      <Login isUserLogin={true} />
      <Menu />
    </>
  );
};

export default page;
