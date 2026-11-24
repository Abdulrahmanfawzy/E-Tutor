import EarningStats from "@/features/instructor-earning/components/earning-stats";
import EarningStatisticChart from "@/features/instructor-earning/components/earning-statistic-chart";
import PaymentCardsCarousel from "@/features/instructor-earning/components/payment-cards-carousel";
import WithdrawMoney from "@/features/instructor-earning/components/withdraw-money";
import WithdrawHistory from "@/features/instructor-earning/components/withdraw-history";
import { BANK_CARDS, CURRENT_BALANCE, MIN_WITHDRAW, PAYMENT_METHODS, WITHDRAW_HISTORY, EARNING_STATS } from "@/features/instructor-earning/data/mock-earning";



export default function page() {
  return (
   <>
  <div className="flex flex-col gap-6">
      <EarningStats stats={EARNING_STATS} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2"><EarningStatisticChart /></div>
        <PaymentCardsCarousel cards={BANK_CARDS} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <WithdrawMoney methods={PAYMENT_METHODS} balance={CURRENT_BALANCE} minWithdraw={MIN_WITHDRAW} />
        <WithdrawHistory records={WITHDRAW_HISTORY} />
      </div>
    </div>
   </>
   

  )
}
