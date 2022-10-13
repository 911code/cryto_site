import React from "react";

export default function Referral() {
  return (
    <div>
      <section className="container mx-auto p-6 font-mono">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Referral Cashback Voucher
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Once your referee becomes qualified (verified Identity verification)
          and complete their trading tasks (including Buy and Sell), you can
          earn up to 220 USDT from each referee's successful trade.
        </p>

        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Referee trading volume ($)</th>
                  <th className="px-4 py-3">My Cashback voucher (USDT)</th>
                  <th className="px-4 py-3">Referee’s Coupon (USDT)</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-black">Sufyan</p>
                        <p className="text-xs text-gray-600">Developer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-ms font-semibold border">22</td>
                  <td className="px-4 py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      Acceptable{" "}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
