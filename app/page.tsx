'use client'

import { useMemo, useState } from 'react'
import {
  Bell,
  BookOpen,
  ChevronDown,
  ClipboardList,
  FileText,
  Gift,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Package,
  PenLine,
  Search,
  Settings,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'

const navItems = [
  { label: '工作台', icon: LayoutDashboard },
  { label: '祝福内容', icon: FileText },
  { label: '订单管理', icon: ClipboardList, count: '12' },
  { label: '礼笺商品', icon: Gift },
  { label: '用户管理', icon: Users },
]

const orders = [
  { id: '#ZF-1048', customer: '林女士', item: '新婚祝福礼笺', amount: '¥168.00', status: '待制作', time: '10分钟前' },
  { id: '#ZF-1047', customer: '周先生', item: '生日心意卡 · 典藏版', amount: '¥88.00', status: '制作中', time: '28分钟前' },
  { id: '#ZF-1046', customer: '陈小姐', item: '乔迁之喜 · 手写套装', amount: '¥238.00', status: '已发货', time: '1小时前' },
  { id: '#ZF-1045', customer: '王先生', item: '感谢有你 · 定制礼盒', amount: '¥328.00', status: '已完成', time: '2小时前' },
]

const statusStyles: Record<string, string> = {
  待制作: 'bg-amber-50 text-amber-700 ring-amber-200',
  制作中: 'bg-blue-50 text-blue-700 ring-blue-200',
  已发货: 'bg-violet-50 text-violet-700 ring-violet-200',
  已完成: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
}

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('工作台')
  const [search, setSearch] = useState('')

  const filteredOrders = useMemo(
    () => orders.filter((order) => `${order.id}${order.customer}${order.item}`.toLowerCase().includes(search.toLowerCase())),
    [search],
  )

  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#28251f]">
      <div className="flex min-h-screen">
        {sidebarOpen && <button aria-label="关闭导航" className="fixed inset-0 z-20 bg-black/20 lg:hidden" onClick={() => setSidebarOpen(false)} />}
        <aside className={`fixed inset-y-0 left-0 z-30 flex w-[248px] flex-col border-r border-[#e9e4da] bg-[#fffdf9] transition-transform lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex h-[84px] items-center justify-between border-b border-[#eee9df] px-7">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#59664b] text-[#fffdf9]"><PenLine /></div>
              <div><p className="font-serif text-[17px] font-semibold tracking-wide">祝福笺坊</p><p className="mt-0.5 text-[10px] tracking-[0.22em] text-[#9c9588]">BLESSING STUDIO</p></div>
            </div>
            <button className="lg:hidden" aria-label="关闭菜单" onClick={() => setSidebarOpen(false)}><X /></button>
          </div>
          <div className="flex-1 px-4 py-7">
            <p className="px-3 pb-3 text-[11px] font-medium tracking-[0.18em] text-[#aaa297]">管理中心</p>
            <nav className="flex flex-col gap-1">
              {navItems.map(({ label, icon: Icon, count }) => <button key={label} onClick={() => { setActiveNav(label); setSidebarOpen(false) }} className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors ${activeNav === label ? 'bg-[#e9eee5] font-medium text-[#4e5d43]' : 'text-[#746f66] hover:bg-[#f3f1eb]'}`}><span className="flex items-center gap-3"><Icon className="size-[18px]" />{label}</span>{count && <span className="rounded-full bg-[#e8b98c] px-2 py-0.5 text-[10px] font-semibold text-white">{count}</span>}</button>)}
            </nav>
            <p className="px-3 pb-3 pt-9 text-[11px] font-medium tracking-[0.18em] text-[#aaa297]">系统设置</p>
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#746f66] hover:bg-[#f3f1eb]"><Settings className="size-[18px]" />偏好设置</button>
          </div>
          <div className="border-t border-[#eee9df] p-5"><div className="flex items-center gap-3 rounded-xl bg-[#f5f1e9] p-3"><div className="flex size-9 items-center justify-center rounded-full bg-[#d9c2a4] text-sm font-semibold text-white">苏</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">苏晚晴</p><p className="truncate text-xs text-[#9c9588]">主理人 · 管理员</p></div><ChevronDown className="size-4 text-[#aaa297]" /></div></div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="flex h-[84px] items-center justify-between border-b border-[#e9e4da] bg-[#fffdf9]/80 px-5 backdrop-blur-sm sm:px-8 lg:px-10">
            <div className="flex items-center gap-3"><button className="lg:hidden" aria-label="打开导航" onClick={() => setSidebarOpen(true)}><Menu /></button><div><p className="text-sm text-[#aaa297]">2024年5月20日 · 星期一</p><h1 className="mt-1 font-serif text-xl font-semibold sm:text-2xl">早安，苏主理人 <span className="font-normal text-[#c8a77d]">✦</span></h1></div></div>
            <div className="flex items-center gap-3"><button aria-label="搜索" className="hidden size-10 items-center justify-center rounded-full border border-[#e5e0d7] text-[#746f66] sm:flex"><Search className="size-[18px]" /></button><button aria-label="通知" className="relative flex size-10 items-center justify-center rounded-full border border-[#e5e0d7] text-[#746f66]"><Bell className="size-[18px]" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-[#d88c67]" /></button></div>
          </header>

          <div className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 flex items-center gap-2 text-sm text-[#8e887d]"><Sparkles className="size-4 text-[#c8a77d]" />今日经营概览</p><h2 className="font-serif text-2xl font-semibold sm:text-[28px]">把每一份心意，妥帖送达。</h2></div><button className="flex w-fit items-center gap-2 rounded-xl bg-[#59664b] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#4d5942]"><PenLine className="size-4" />创建祝福内容</button></div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[{ label: '本月销售额', value: '¥28,490', change: '+18.6%', icon: TrendingUp, color: 'bg-[#e9eee5] text-[#59664b]' }, { label: '新增订单', value: '186', change: '+12.4%', icon: ShoppingBag, color: 'bg-[#f7e9dc] text-[#c8835d]' }, { label: '活跃用户', value: '2,841', change: '+8.2%', icon: Users, color: 'bg-[#ebe8f2] text-[#77709a]' }, { label: '待处理内容', value: '24', change: '需要关注', icon: BookOpen, color: 'bg-[#f3e9c9] text-[#a78a44]' }].map(({ label, value, change, icon: Icon, color }) => <article key={label} className="rounded-2xl border border-[#ebe6dc] bg-[#fffdf9] p-5 shadow-[0_4px_16px_rgba(67,54,36,0.03)]"><div className="flex items-start justify-between"><div className={`flex size-10 items-center justify-center rounded-xl ${color}`}><Icon className="size-[19px]" /></div><span className="text-xs font-medium text-[#78936a]">{change}</span></div><p className="mt-5 text-sm text-[#938c80]">{label}</p><p className="mt-1 text-[26px] font-semibold tracking-tight">{value}</p></article>)}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.55fr_1fr]">
              <article className="rounded-2xl border border-[#ebe6dc] bg-[#fffdf9] p-5 sm:p-6"><div className="flex items-center justify-between"><div><h3 className="font-serif text-lg font-semibold">销售趋势</h3><p className="mt-1 text-xs text-[#aaa297]">近 7 日订单与销售额</p></div><button className="rounded-lg border border-[#e8e2d8] px-3 py-2 text-xs text-[#746f66]">本周 <ChevronDown className="ml-1 inline size-3" /></button></div><div className="mt-7 flex h-[190px] items-end gap-3 px-1 sm:gap-5"><div className="flex h-full flex-col justify-between pb-1 text-[10px] text-[#b4ada2]"><span>¥8k</span><span>¥4k</span><span>¥0</span></div><div className="relative flex h-full flex-1 items-end justify-around gap-2 border-b border-l border-[#ebe6dc] pl-3"><div className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-dashed border-[#eee9df]" />{[42, 57, 48, 74, 61, 86, 68].map((height, index) => <div key={index} className="flex h-full flex-1 flex-col items-center justify-end gap-2"><div className={`w-full max-w-[32px] rounded-t-lg ${index === 5 ? 'bg-[#59664b]' : 'bg-[#dce4d7]'}`} style={{ height: `${height}%` }} /><span className="text-[10px] text-[#aaa297]">{['周二', '周三', '周四', '周五', '周六', '周日', '今日'][index]}</span></div>)}</div></div></article>

              <article className="rounded-2xl border border-[#ebe6dc] bg-[#59664b] p-6 text-[#f8f7f4] shadow-[0_4px_16px_rgba(67,54,36,0.06)]"><div className="flex items-start justify-between"><div><p className="text-sm text-[#d7dece]">内容灵感库</p><h3 className="mt-3 font-serif text-[23px] leading-tight">让文字，替你说出<br />那些未尽的话。</h3></div><div className="flex size-10 items-center justify-center rounded-xl bg-white/10"><Sparkles className="size-[18px] text-[#ead6b4]" /></div></div><p className="mt-6 max-w-[280px] text-sm leading-6 text-[#d7dece]">本周已有 36 条新灵感，涵盖节日、生日与日常问候。</p><button className="mt-6 rounded-xl bg-[#f3e4cc] px-4 py-2.5 text-sm font-medium text-[#59664b]">查看灵感库 <span className="ml-2">→</span></button></article>
            </div>

            <article className="mt-6 overflow-hidden rounded-2xl border border-[#ebe6dc] bg-[#fffdf9]"><div className="flex flex-col gap-4 border-b border-[#eee9df] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div><h3 className="font-serif text-lg font-semibold">最新订单</h3><p className="mt-1 text-xs text-[#aaa297]">实时更新的订单处理情况</p></div><div className="flex items-center gap-3"><div className="flex h-9 w-full items-center gap-2 rounded-lg border border-[#e8e2d8] px-3 sm:w-52"><Search className="size-4 text-[#aaa297]" /><input aria-label="搜索订单" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="搜索订单..." className="min-w-0 bg-transparent text-sm outline-none placeholder:text-[#b8b1a6]" /></div><button aria-label="更多订单操作" className="flex size-9 items-center justify-center rounded-lg border border-[#e8e2d8] text-[#746f66]"><MoreHorizontal className="size-4" /></button></div></div><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-[#fbfaf7] text-xs text-[#aaa297]"><tr><th className="px-6 py-3.5 font-medium">订单编号</th><th className="px-6 py-3.5 font-medium">客户</th><th className="px-6 py-3.5 font-medium">商品内容</th><th className="px-6 py-3.5 font-medium">金额</th><th className="px-6 py-3.5 font-medium">状态</th><th className="px-6 py-3.5 font-medium">更新时间</th></tr></thead><tbody className="divide-y divide-[#f0ece5]">{filteredOrders.map((order) => <tr key={order.id} className="transition-colors hover:bg-[#fcfbf8]"><td className="px-6 py-4 font-medium text-[#5e594f]">{order.id}</td><td className="px-6 py-4">{order.customer}</td><td className="px-6 py-4 text-[#746f66]">{order.item}</td><td className="px-6 py-4 font-medium">{order.amount}</td><td className="px-6 py-4"><span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ring-inset ${statusStyles[order.status]}`}>{order.status}</span></td><td className="px-6 py-4 text-[#aaa297]">{order.time}</td></tr>)}</tbody></table>{filteredOrders.length === 0 && <p className="px-6 py-10 text-center text-sm text-[#aaa297]">没有找到匹配的订单</p>}</div></article>

            <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-[#e9e4da] pt-5 text-xs text-[#aaa297] sm:flex-row"><p>祝福笺坊管理后台 · 用心写好每一份祝福</p><p>数据更新时间：刚刚</p></div>
          </div>
        </section>
      </div>
    </main>
  )
}
