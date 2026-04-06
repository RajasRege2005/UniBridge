'use client';

import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';
import { adminLeadDistribution, adminCallTrend } from '@/lib/mockData';

export default function LeadDistributionCard() {
  const total = adminLeadDistribution.reduce((sum, row) => sum + row.count, 0);
  const maxTrend = Math.max(...adminCallTrend, 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.06 }}
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '18px',
        padding: '22px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <BarChart3 size={18} color="#4338ca" />
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#0f172a' }}>Lead Distribution</p>
          <p style={{ margin: 0, fontSize: 12, color: '#94a3b8' }}>Hot, warm, and cold segmentation</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
        {adminLeadDistribution.map((row, idx) => {
          const percentage = total > 0 ? Math.round((row.count / total) * 100) : 0;
          return (
            <motion.div key={row.label} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + idx * 0.07 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 12, color: '#334155', fontWeight: 600 }}>{row.label}</span>
                <span style={{ fontSize: 12, color: '#64748b' }}>{row.count} ({percentage}%)</span>
              </div>
              <div style={{ height: 8, background: '#e2e8f0', borderRadius: 999, overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.7, delay: 0.1 + idx * 0.08 }}
                  style={{ height: '100%', background: row.color }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: 11, color: '#94a3b8', fontWeight: 600 }}>Call Trend (Last 7 Days)</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 68 }}>
          {adminCallTrend.map((value, idx) => (
            <motion.div
              key={`trend-${idx}`}
              initial={{ height: 0 }}
              animate={{ height: `${Math.max(12, (value / maxTrend) * 100)}%` }}
              transition={{ duration: 0.5, delay: 0.16 + idx * 0.04 }}
              style={{
                flex: 1,
                borderRadius: 6,
                background: idx === adminCallTrend.length - 1 ? '#2563eb' : '#bfdbfe',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
