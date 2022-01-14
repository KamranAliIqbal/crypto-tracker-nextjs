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

  const color =
    "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...";

  return (
    <div className="flex flex-col sm:flex-row m-5 justify-between item-center h-auto border-b-2 border-b-neutral-900">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
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
      </div>

      <img
        className="object-contain"
        src="/coin.png"
        width={200}
        height={100}
      />
    </div>
  );
}

export default Header;
