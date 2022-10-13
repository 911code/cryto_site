import Header from "./components/Header";
import List from "./components/List";
import Referral from "./components/Referral";
import Rewards from "./components/Rewards";
import Satats from "./components/Satats";
import Invite from "./components/Invite";
import Voucher from "./components/Voucher";
import Partners from "./components/Partners";

function App() {
  return (
    <div className="bg-white mx-auto p-12 w-full h-screen space-y-6">
      <div className="logo mt-6 px-4 font-bold text-lg  leading-10">
        Referal & Rewards
      </div>
      <Header />
      <Rewards />
      <Satats />
      <Invite />
      <Partners />
      <Voucher />
      <Referral />
      <div className="voucher_stat">
        <p></p>
        <div className="table"></div>
      </div>
      <List />
      <div className="faq"></div>
      <div className="terms_cond"></div>
    </div>
  );
}

export default App;
