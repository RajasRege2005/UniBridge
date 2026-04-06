'use client';

import AdminDashboardLayout from '@/components/layout/AdminDashboardLayout';
import AdminUniversitiesPanel from '@/components/admin/AdminUniversitiesPanel';
import AdminPriorityQueue from '@/components/admin/AdminPriorityQueue';
import AdminCalendarCard from '@/components/admin/AdminCalendarCard';
import AdminStatsOverviewCard from '@/components/admin/AdminStatsOverviewCard';
import LeadDistributionCard from '@/components/admin/LeadDistributionCard';
import EnrollmentFunnelCard from '@/components/admin/EnrollmentFunnelCard';
import LiveActivityCard from '@/components/admin/LiveActivityCard';
import AdminStudentProfilesCard from '@/components/admin/AdminStudentProfilesCard';
import AdminReportsHubCard from '@/components/admin/AdminReportsHubCard';
import { useAuthSession } from '@/components/auth/AuthSessionProvider';

export default function AdminDashboardPageClient() {
  const { profile } = useAuthSession();
  const displayName = profile?.full_name?.trim() || 'Admin';

  return (
    <AdminDashboardLayout
      title={`Admin Dashboard · ${displayName}`}
      subtitle="Live ops for universities, students, and upcoming meetings"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        <div id="overview">
          <AdminStatsOverviewCard />
        </div>
        <div id="lead-distribution">
          <LeadDistributionCard />
        </div>
        <div id="funnel">
          <EnrollmentFunnelCard />
        </div>
        <div id="universities">
          <AdminUniversitiesPanel />
        </div>
        <div id="priority">
          <AdminPriorityQueue />
        </div>
        <div id="calendar">
          <AdminCalendarCard />
        </div>
        <div id="activity">
          <LiveActivityCard />
        </div>
        <div id="profiles">
          <AdminStudentProfilesCard />
        </div>
        <div id="reports">
          <AdminReportsHubCard />
        </div>
      </div>
    </AdminDashboardLayout>
  );
}
