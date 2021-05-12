import Button from "../Components/Button";
import Image from "next/image";
import Link from "next/link";

export default function HomeStart(): JSX.Element {
  const start = { input: "START" };
  const multi = { input: "MULTI-PLAYER", href: "/Register" };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-400 bg-center bg-no-repeat bg-cover">
      <div className="px-16 text-center infos md:text-center font-Quantico w-50">
        <p>Design by Matthias, Benjamin, Matthieu Made at Wild Code School</p>
      </div>

      <div className="flex justify-center p-8 pt-16">
        <Image
          className="bg-cover "
          src="/shifumii.png"
          alt=""
          width={400}
          height={383}
        />
      </div>
      <div className="pt-4 text-2xl">
        <div>
          <p>Shifumii Game</p>
        </div>
      </div>

      <div className=" pt-9 ">
        <Link href="/OnePlayer">
          <a>
            <Button {...start} />
          </a>
        </Link>
      </div>

      <div className="pt-6">
        <Link href="/Register">
          <a>
            <Button {...multi} />
          </a>
        </Link>
      </div>
    </div>
  );
}
