import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Error() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="">
      <h1>NOT FOUND</h1>
      <p>
        Go back to the <Link href="/">Homepage</Link>
      </p>
    </div>
  );
}

export default Error;
