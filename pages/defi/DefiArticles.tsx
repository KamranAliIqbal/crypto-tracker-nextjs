import Link from "next/link";
import defi from "../../public/defi.png";

function DefiArticles() {
  return (
    <div className="md:flex justify-between py-10 px-10 bg-indigo-600 text-indigo-100">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-2xl md:text-4xl text-white mb-6">
          Welcome to the page about DEFI{" "}
        </h2>
        <Link href="#">
          <a className="inline-block py-3 px-6 text-lg bg-gray-400 hover:bg-gray-300 text-gray-800 rounded mr-2">
            Learn More
          </a>
        </Link>
      </div>

      <div className="md:w-1/2 ">
        <img className="w-1/2 rounded shadow-2xl" src="/defii.jpeg" alt="" />
      </div>

      <div className="flex">
        <div>
          <img className="" src="/chainlink.jpg" />
        </div>

        <div>
          <img className="" src="/avalanche.png" />
        </div>

        <div>
          <img className="" src="terra.jpg" />
        </div>
      </div>
    </div>
  );
}

export default DefiArticles;
