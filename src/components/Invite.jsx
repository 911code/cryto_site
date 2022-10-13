import React from "react";

export default function Invite() {
  return (
    <div className="">
      <p className="text-lg font-semibold m-auto text-center leading-6 text-gray-900 dark:text-white">
        How to start Referring<span className="text-grey-600"></span> Refer in 3
        easy steps:
      </p>

      <div className="grid mb-8 p-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3">
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-t-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
          <figcaption className="flex justify-center items-center space-x-3">
            <img
              className="w-9 h-9 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile "
            />
          </figcaption>
          <blockquote className="mx-auto mt-3 mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Copy Link
            </h3>
            <p className="my-4 font-light">
              Sign Up / Sign In to your Pexo account, navigate to the referral
              page and copy your unique referral link.
            </p>
          </blockquote>
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-t-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
          <figcaption className="flex justify-center items-center space-x-3">
            <a
              href=" "
              class="inline-flex items-center text-lg font-semibold text-blue-600 hover:underline">
              Share Link
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </a>
          </figcaption>
          <blockquote className="mx-auto mt-3 mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Share Link
            </h3> */}
            <p className="my-4 font-light">
              Share your unique invite link with friends and family on media and
              favorite messaging App.
            </p>
          </blockquote>
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-t-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
          <figcaption className="flex justify-center items-center space-x-3">
            <img
              className="w-9 h-9 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile "
            />
          </figcaption>
          <blockquote className="mx-auto mt-3 mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Start Earning
            </h3>
            <p className="my-4 font-light">
              Earn up to 50% commission of Trading fees on every successful
              referral and when referee complete a trade.
            </p>
          </blockquote>
        </figure>
      </div>
    </div>
  );
}
