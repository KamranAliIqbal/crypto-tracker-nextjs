import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Select from "react-select";

function Header() {
  const options = [
    { value: "currency", label: "USD" },
    { value: "currency", label: "NOK" },
  ];

  const color = "text-indigo-800 hover:text-indigo-600 inline-block p-4";

  return (
    <div className="flex justify-between p-3 border overflow-hidden">
      <div className="flex items-center ">
        <Link href="/">
          <a className={color}>Home</a>
        </Link>
        <Link href="/trending">
          <a className={color}>Trending</a>
        </Link>
        <Link href="/defi">
          <a className={color}> Defi</a>
        </Link>
        <Link href="/networks">
          <a className={color}>Blockchain networks</a>
        </Link>
        <Link href="/exchanges">
          <a className={color}>Exchanges</a>
        </Link>
        <Link href="/categories">
          <a className={color}>Categories</a>
        </Link>
      </div>
      <div className="flex px-4 items-center">
        <Link href="/login">
          <a className={color}>Login</a>
        </Link>
        <Link href="#">
          <a className="text-yellow-700 bg-yellow-400 px-4 py-2 hover:text-yellow-800 hover:bg-yellow-300 rounded transition ease-in duration-150">
            Signup
          </a>
        </Link>
        <img className="ml-6" src="/coin.png" width={200} height={100} />
      </div>
    </div>
  );
}

export default Header;
