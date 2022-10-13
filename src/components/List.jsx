import React from "react";

export default function List() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="relative bg-white px-6 pt-10  pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className=" max-w-xl">
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>
                WHAT YOU STAND TO GAIN{" "}
                <span>
                  {" "}
                  Additional Benefits of joining the Pexo Referral Program:
                </span>
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">
                    <code className="text-sm font-bold text-gray-900">
                      50% commission
                    </code>{" "}
                    of Referee’s trading fees adds automatically to Referrer
                    spot balance.
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">
                    <code className="text-sm font-bold text-gray-900">
                      $220 Cashback Voucher
                    </code>{" "}
                    for each referee that complete it referraltasks
                    successfully.
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">
                    Identity verification (KYC 1) must be completed before a
                    user can receive rewards.
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">
                    You can only claim one reward per referral. Referees must
                    accumulatively deposit more than $100 within 14 days of
                    registration to qualify.
                  </p>
                </li>
              </ul>
              <p>
                The Referral Program cannot be used in conjunction with the
                Partnership Program. For more information about the Partnership
                Program.
              </p>
            </div>
            <div className="pt-8 text-base font-semibold leading-7">
              <p className="text-gray-900">
                For more information about the Partnership Program.
              </p>
              <p>
                <a
                  href=" https://www.Bitxo.me/partners"
                  className="text-sky-500 hover:text-sky-600">
                  please visit &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
