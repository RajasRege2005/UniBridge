'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, PhoneCall, Target, Gauge } from 'lucide-react';
import { adminKpiStats } from '@/lib/mockData';

const toneStyles = {
  blue: { bg: '#eff6ff', text: '#1d4ed8', border: '#bfdbfe' },
  green: { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0' },
  amber: { bg: '#fffbeb', text: '#b45309', border: '#fde68a' },
  violet: { bg: '#f5f3ff', text: '#6d28d9', border: '#ddd6fe' },
} as const;

const iconMap = {
  active_students: Users,
  calls_today: PhoneCall,
  conversion_rate: Target,
  avg_readiness: Gauge,
} as const;

export default function AdminStatsOverviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.02 }}
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '18px',
        padding: '22px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TrendingUp size={18} color="#2563eb" />
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#0f172a' }}>Admin Overview</p>
            <p style={{ margin: 0, fontSize: 12, color: '#94a3b8' }}>Daily performance snapshot</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
        {adminKpiStats.map((item, idx) => {
          const tone = toneStyles[item.tone];
          const Icon = iconMap[item.id as keyof typeof iconMap] ?? TrendingUp;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + idx * 0.06 }}
              style={{
                border: `1px solid ${tone.border}`,
                background: tone.bg,
                borderRadius: 12,
                padding: '12px 12px 10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ margin: 0, fontSize: 11, color: '#64748b', fontWeight: 600 }}>{item.label}</p>
                <Icon size={14} color={tone.text} />
              </div>
              <p style={{ margin: '8px 0 4px', fontSize: 20, fontWeight: 800, color: '#0f172a' }}>{item.value}</p>
              <p style={{ margin: 0, fontSize: 11, color: tone.text, fontWeight: 700 }}>{item.delta}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
