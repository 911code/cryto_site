import React from 'react'

export default function Header() {
  return (
     <div className="referal_details h-2/4 grid grid-cols-2 py-9 ">
        <div className="left flex flex-col justify-between max-w-md text-base leading-7">
          <p>Refer your family and friends & earn cashback voucher!</p>
          <p>
            Invite a friend to join Pexo, earn Rewards, Rebates and Commissions
            up to 50% from their trading Fees and up to $220 Cashback voucher.
          </p>
        </div>
        <div className="right grid grid-rows-2 gap-2 items-center">
          <div className="referal_code">
            Referral code: <span> </span>
          </div>
          <div className="referal_link">
            Referral code: <span>Referral Link </span>
          </div>
        </div>
      </div>
  )
}
