
"use client";

import DashboardStats from '@/components/DashboardStats';
import DashboardQuickAccess from '@/components/DashboardQuickAccess';
import DashboardInsights from '@/components/DashboardInsights';

export default function Home() {
  return (
    <div className="space-y-10 p-1 sm:p-2">
      <DashboardStats />
      <DashboardQuickAccess />
      <DashboardInsights />
    </div>
  );
}
