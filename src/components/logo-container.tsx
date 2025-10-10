import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img
        src="https://intervu.ai/assets/intervu.ai_1752587721800-BcnehdvA.jpg"
        alt="Logo"
        className="min-w-5 min-h-5 object-contain"
        height={70}
        width={100}
      />
    </Link>
  );
};
