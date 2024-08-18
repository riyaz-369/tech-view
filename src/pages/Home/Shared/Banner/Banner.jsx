import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="md:flex container items-center">
      <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
            Explore Modern <span className="text-purple-600 ">Electronics</span>{" "}
            <br />
            Gadget
          </h2>
          <p className="mt-4 text-sm text-gray-500  lg:text-base">
            Discover the latest in modern electronics, featuring cutting-edge
            gadgets that redefine technology and elevate your lifestyle.
          </p>

          <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
            <Link to="/products">
              <Button>View Products</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div>
          <img
            className="rounded-md"
            src="https://www.meteorelectrical.com/media/wysiwyg/dev.jpeg"
            alt="banner image"
          />
          <div className="w-full h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
