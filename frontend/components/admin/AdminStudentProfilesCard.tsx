'use client';

import { motion } from 'framer-motion';
import { UserRound } from 'lucide-react';
import { adminStudentProfiles } from '@/lib/mockData';

const priorityTone = {
  Hot: { bg: '#fef2f2', text: '#dc2626', border: '#fecaca' },
  Warm: { bg: '#fffbeb', text: '#b45309', border: '#fde68a' },
  Cold: { bg: '#eef2ff', text: '#4338ca', border: '#c7d2fe' },
} as const;

export default function AdminStudentProfilesCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18 }}
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '18px',
        padding: '22px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <UserRound size={18} color="#2563eb" />
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#0f172a' }}>Top Student Profiles</p>
          <p style={{ margin: 0, fontSize: 12, color: '#94a3b8' }}>High potential students to monitor</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {adminStudentProfiles.map((student, idx) => {
          const tone = priorityTone[student.priority];
          return (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.06 }}
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: 12,
                padding: '10px 12px',
                background: '#f8fafc',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: '#dbeafe', color: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, marginRight: 10 }}>
                  {student.name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: '#0f172a' }}>{student.name}</p>
                  <p style={{ margin: 0, fontSize: 11, color: '#64748b' }}>{student.country} · {student.intake}</p>
                </div>
                <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, color: '#1e40af' }}>{student.score}</span>
              </div>
              <div style={{ marginTop: 8 }}>
                <span style={{ fontSize: 10, fontWeight: 700, background: tone.bg, color: tone.text, border: `1px solid ${tone.border}`, borderRadius: 999, padding: '2px 8px' }}>
                  {student.priority}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
