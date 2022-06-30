import { SpinnerCircularSplit } from "spinners-react";
import Image from "next/image";

function Loader() {
  return (
    <div className="h-screen bg-black">
      <div className="pt-40 flex flex-col items-center space-y-4">
        <span className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px]">
          <Image
            src="https://rb.gy/y9mwtb"
            layout="fill"
            objectFit="contain"
            className="animate-pulse"
            alt="loader"
          />
        </span>
        <SpinnerCircularSplit
          size={49}
          thickness={123}
          speed={100}
          color="#36ad47"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      </div>
    </div>
  );
}

export default Loader;
