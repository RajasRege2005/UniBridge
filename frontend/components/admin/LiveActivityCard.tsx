'use client';

import { motion } from 'framer-motion';
import { Activity, CircleDot } from 'lucide-react';
import { adminLiveActivities } from '@/lib/mockData';

const statusColor = {
  live: '#ef4444',
  info: '#2563eb',
  done: '#16a34a',
  warn: '#d97706',
} as const;

export default function LiveActivityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.14 }}
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '18px',
        padding: '22px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Activity size={18} color="#ef4444" />
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#0f172a' }}>Live Activity Feed</p>
          <p style={{ margin: 0, fontSize: 12, color: '#94a3b8' }}>Recent admin and counseling actions</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {adminLiveActivities.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 + idx * 0.05 }}
            style={{
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              padding: '10px 12px',
              background: '#f8fafc',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <motion.div animate={item.status === 'live' ? { opacity: [0.4, 1, 0.4] } : { opacity: 1 }} transition={{ duration: 1.2, repeat: Infinity }}>
                <CircleDot size={12} color={statusColor[item.status]} />
              </motion.div>
              <p style={{ margin: 0, fontSize: 12, color: '#0f172a', fontWeight: 700 }}>{item.title}</p>
              <span style={{ marginLeft: 'auto', fontSize: 11, color: '#94a3b8' }}>{item.ago}</span>
            </div>
            <p style={{ margin: '6px 0 0 20px', fontSize: 12, color: '#64748b' }}>{item.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
