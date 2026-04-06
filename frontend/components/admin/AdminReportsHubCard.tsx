'use client';

import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { adminRecentReports } from '@/lib/mockData';

export default function AdminReportsHubCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.22 }}
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
          <FileText size={18} color="#2563eb" />
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#0f172a' }}>Reports Hub</p>
          <p style={{ margin: 0, fontSize: 12, color: '#94a3b8' }}>Recent PDF and operational reports</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {adminRecentReports.map((report, idx) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.24 + idx * 0.05 }}
            style={{
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              padding: '10px 12px',
              background: '#f8fafc',
            }}
          >
            <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: '#0f172a' }}>{report.title}</p>
            <p style={{ margin: '4px 0 8px', fontSize: 11, color: '#64748b' }}>{report.owner} · {report.updatedAt}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <a href={report.pdfUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, color: '#2563eb', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 8, padding: '4px 8px' }}>
                  <ExternalLink size={12} />
                  View
                </span>
              </a>
              <a href={report.pdfUrl} download style={{ textDecoration: 'none' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, color: '#475569', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: 8, padding: '4px 8px' }}>
                  <Download size={12} />
                  Download
                </span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
