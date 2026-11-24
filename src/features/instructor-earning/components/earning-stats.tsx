import { useTranslations } from 'next-intl'
import { EarningStat } from '../types/earning.types'
import { cn } from 'cn'


export default function EarningStats({ stats }: { stats: EarningStat[] }) {
    
    const t= useTranslations("instructorEarning.stats")

  return (
     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ labelKey, value, icon: Icon, iconClassName }) => (
        <div key={labelKey} className="flex items-center gap-4 rounded-lg bg-white p-5">
          <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center", iconClassName)}>
            <Icon size={24} />
          </div>
          <div>
            <p className="text-xl font-semibold">{value}</p>
            <p className="text-label-md text-muted-foreground">{t(labelKey)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
