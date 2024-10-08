import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer
      id="contact"
      className="relative md:flex bg-[rgba(12,12,12,0.31)] rounded-lg mt-32 z-10 mx-5 mb-5 text-[--color-text]  justify-between"
    >
      <div className="text-xl font-bold tracking-wider mb-4 md:mb-0">
        {/* <h2 className="text-white">Contact Me </h2> */}
        <h4 className="text-white mb-2">I'm Just One Click Away</h4>
        <a className=" text-white" href="mailto:sonsalemanoharedu@gmail.com">
          sonsalemanoharedu@gmail.com
        </a>
      </div>
      <div className=" w-64 inline-flex gap-10 text-5xl no-underline items-center justify-center ml-4 mt-4 mr-5">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/manohar-sonsale/"
          className="text-[#0fd8f3]"
        >
          <img src={getImageUrl("contact/linkedin.png")} />
        </a>
        <a
          target="_blank"
          href="https://github.com/MPSRPS"
          className="text-[#0fd8f3]"
        >
          <img src={getImageUrl("contact/github.png")} />
        </a>
        <a
          target="_blank"
          href="https://x.com/SonsaleManohar"
          className="text-[#0fd8f3]"
        >
          <img src={getImageUrl("contact/twitter.png")} />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/manohar_sonsale/"
          className="text-[#0fd8f3]"
        >
          <img src={getImageUrl("contact/instagram.png")} />
        </a>
      </div>
    </footer>
  );
};
