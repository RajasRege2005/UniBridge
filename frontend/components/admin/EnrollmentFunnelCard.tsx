'use client';

import { motion } from 'framer-motion';
import { Funnel } from 'lucide-react';
import { adminEnrollmentFunnel } from '@/lib/mockData';

export default function EnrollmentFunnelCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '18px',
        padding: '22px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Funnel size={18} color="#ea580c" />
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#0f172a' }}>Enrollment Funnel</p>
          <p style={{ margin: 0, fontSize: 12, color: '#94a3b8' }}>Student journey progression</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {adminEnrollmentFunnel.map((row, idx) => (
          <motion.div key={row.stage} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 + idx * 0.06 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: '#334155', fontWeight: 600 }}>{row.stage}</span>
              <span style={{ fontSize: 12, color: '#475569', fontWeight: 700 }}>{row.count.toLocaleString()} ({row.percent}%)</span>
            </div>
            <div style={{ height: 9, borderRadius: 999, background: '#e2e8f0', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${row.percent}%` }}
                transition={{ duration: 0.7, delay: 0.15 + idx * 0.06 }}
                style={{ height: '100%', background: row.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
