import React from "react";

const Rewards = () => {
  return (
    <div className="overflow-x-auto relative py-6">
      <table className="w-1/4 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Referrals Rules
            </th>
            <th scope="col" className="py-3 px-6">
              Invite Now
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-4 px-6">Referrals</td>
            <td className="py-4 px-6">Reward</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-4 px-6">Sliver</td>
            <td className="py-4 px-6">Sliver</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Rewards;
