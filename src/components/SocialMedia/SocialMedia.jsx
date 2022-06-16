import { BsTwitter, BsVimeo, BsLinkedin } from "react-icons/bs";
export const SocialMedia = () => {
  return (
    <div className="position-fixed" style={{ right: "0", top: "40%" }}>
      <div className="d-flex flex-column gap-4 fs-4 me-2">
        <BsTwitter role="button" />
        <BsVimeo role="button" />
        <BsLinkedin role="button" />
      </div>
    </div>
  );
};
