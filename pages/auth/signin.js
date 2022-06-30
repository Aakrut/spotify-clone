import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Loader } from "../../components";

const SignIn = ({ providers }) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  if (session) return <Loader />;

  

  return (
    <div className="bg-black h-screen flex flex-col items-center pt-40 space-y-8">
      <Head>
        <title>Spotify - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://rb.gy/y9mwtb"
        height={250}
        width={600}
        objectFit="contain"
        className="animate-pulse"
        alt="logo"
      />
      {Object?.values(providers)?.map((provider) => (
        <div key={provider.id}>
          <button
            className="text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146] font-body"
            onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SignIn;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
