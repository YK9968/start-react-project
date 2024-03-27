import { HiUser } from "react-icons/hi";
import { AiFillBug } from "react-icons/ai";

const UserMenu = ({ name, problem }) => {
  return (
    <div>
      <p>
        <HiUser size={50} /> {name}
      </p>
      <p>
        <AiFillBug /> {problem}
      </p>
    </div>
  );
};

export default UserMenu;
