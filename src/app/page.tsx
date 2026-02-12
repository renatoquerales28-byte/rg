
"use client";

import DashboardStats from '@/components/DashboardStats';
import DashboardQuickAccess from '@/components/DashboardQuickAccess';
import DashboardRecentSales from '@/components/DashboardRecentSales';

export default function Home() {
  return (
    <div className="space-y-8 p-1 sm:p-2">
      <DashboardStats />
      <DashboardQuickAccess />
      <DashboardRecentSales />
    </div>
  );
}
