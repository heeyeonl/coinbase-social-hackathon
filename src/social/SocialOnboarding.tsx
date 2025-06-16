import { useState } from "react";
import CardContainer from "../components/CardContainer";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../utils/userStorage";

const SocialOnboarding = () => {
  const { setUser } = useUser();
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  const handleContinue = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const updatedUser = updateUser({ username });
    setUser(updatedUser);
    navigate("/social");
  };

  return (
    <CardContainer>
      <div className="p-8">
        <p className="font-[Coinbase Display] text-[28px] font-medium mb-2">
          Create your social profile
        </p>
        <div className="flex flex-col justify-center items-center py-10 gap-5">
          <img width={100} height={100} src="/profile.svg" alt="profile" />
          <p className="font-[Coinbase Display] text-2xl font-medium">
            Heeyeon Lee
          </p>
        </div>
        <label className="font-[Coinbase Sans]">Username</label>
        <div className="relative w-full mt-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            @
          </span>
          <input
            className="w-full p-4 pl-8 rounded-lg border border-[var(--ui-black)]"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter' && username !== '') {
                handleContinue(e);
              }
            }}
          ></input>
        </div>
        <button
          className={`w-full rounded-full text-base text-white h-[56px] mt-8 ${
            username === ""
              ? "cursor-not-allowed bg-[#0052ff]/50"
              : "cursor-pointer bg-[var(--primary)]"
          }`}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </CardContainer>
  );
};

export default SocialOnboarding;
