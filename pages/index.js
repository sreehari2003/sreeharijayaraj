import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <article className="w-full px-10 py-10 mb-20 overflow-y-auto max-w-[620px] mx-auto">
        <div className="flex items-start justify-center w-full mb-10 overflow-hidden rounded-lg max-h-[500px] ">
          <img
            src="https://pbs.twimg.com/profile_images/1505148040016846850/zmA4kdAW_400x400.jpg"
            alt="sreehari in his amazing look"
            title="Photo of sreehari"
            className="rounded-xl"
          />
        </div>
        <h2 className="mt-12 mb-6 text-3xl font-black md:text-5xl">
          <span className="text-gray-400">
            Hi, <br></br>
            <span>I'm </span>{" "}
          </span>
          Sreehari jayaraj !
        </h2>
        <div className="post-content">
          <p className="text-lg text-gray-500">
            I'm a <span className="font-medium">Full-stack web developer</span>{" "}
            by Passion ,I currently studies Btech in computer science
          </p>
          <p className="text-lg text-gray-500">
            I like building clean and interactive apps using React.js, Next js,
            Node js and other JavaScript tech.
          </p>
          <p className="text-lg text-gray-500">
            On weekends I like to travel. I like to Netflix and chill. Some
            weekends go into building some side projects like this{" "}
            <Link href="https://typeintern.netlify.app/">
              <a target="_blank">Typespeed</a>
            </Link>
            ,{" "}
            <Link href="https://diary-app-cocoder.netlify.app/">
              <a target="_blank">Diary App</a>
            </Link>{" "}
            .
          </p>
        </div>
        <div className="px-4 py-3 my-5 text-base text-gray-400 bg-gray-100 rounded-xl dark:bg-gray-900 dark:text-gray-500">
          The code for this blog is{" "}
          <a
            className="underline"
            target="_blank"
            href="https://github.com/rishimohan/rishimohan.me"
          >
            available on Github
          </a>
          .
        </div>
      </article>
    </>
  );
}
