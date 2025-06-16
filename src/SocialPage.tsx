import SocialOnboarding from "./SocialOnboarding";

const SocialPage = () => {
  const isUsernameSet = sessionStorage.getItem("isUsernameSet") === "true";

  return (
    <div className="p-8">
      {isUsernameSet ? (
        <div>social page</div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <SocialOnboarding />
        </div>
      )}
    </div>
  );
};

export default SocialPage;
