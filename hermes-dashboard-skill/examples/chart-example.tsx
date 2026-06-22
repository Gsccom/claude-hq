// ============================================================
// examples/chart-example.tsx
// Recharts 다크테마 차트 예시 (설교사령부용)
// ============================================================
'use client'

import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
         XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// ── 찬양 DB 진척도 차트 ──────────────────────────────────────
const praiseData = [
  { month: '1월', hymns: 10, ccm: 5  },
  { month: '2월', hymns: 15, ccm: 10 },
  { month: '3월', hymns: 20, ccm: 15 },
  { month: '4월', hymns: 25, ccm: 20 },
  { month: '5월', hymns: 30, ccm: 25 },
  { month: '6월', hymns: 32, ccm: 30 },
]

// ── 파이프라인 파이 차트 ─────────────────────────────────────
const pipelineData = [
  { name: '완료', value: 1,  color: '#22c55e' },
  { name: '진행중', value: 3, color: '#6366f1' },
  { name: '대기중', value: 1, color: '#f59e0b' },
  { name: '설계중', value: 1, color: '#374151' },
]

// ── 공통 툴팁 스타일 ─────────────────────────────────────────
const tooltipStyle = {
  contentStyle: { background: '#111827', border: '1px solid #1f2937', borderRadius: 8 },
  labelStyle: { color: '#e2e8f0' },
  itemStyle: { color: '#94a3b8' }
}

export function PraiseProgressChart() {
  return (
    <div style={{ background:'#111827', border:'1px solid #1f2937', borderRadius:12, padding:20 }}>
      <h3 style={{ color:'#e2e8f0', fontSize:'0.8rem', marginBottom:16 }}>🎵 찬양 DB 진척도</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={praiseData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis dataKey="month" tick={{ fill:'#6b7280', fontSize:11 }} />
          <YAxis tick={{ fill:'#6b7280', fontSize:11 }} />
          <Tooltip {...tooltipStyle} />
          <Legend wrapperStyle={{ color:'#94a3b8', fontSize:11 }} />
          <Bar dataKey="hymns" name="찬송가" fill="#7c3aed" radius={[4,4,0,0]} />
          <Bar dataKey="ccm"   name="CCM"   fill="#06b6d4" radius={[4,4,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function PipelineStatusChart() {
  return (
    <div style={{ background:'#111827', border:'1px solid #1f2937', borderRadius:12, padding:20 }}>
      <h3 style={{ color:'#e2e8f0', fontSize:'0.8rem', marginBottom:16 }}>📊 파이프라인 현황</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={pipelineData} cx="50%" cy="50%" innerRadius={50} outerRadius={80}
            dataKey="value" label={({ name, percent }) => `${name} ${(percent*100).toFixed(0)}%`}
            labelLine={false}>
            {pipelineData.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip {...tooltipStyle} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export function SermonActivityChart() {
  const data = [
    { week: '1주', sermons: 2, md: 5, ppt: 2 },
    { week: '2주', sermons: 1, md: 8, ppt: 3 },
    { week: '3주', sermons: 3, md: 12, ppt: 5 },
    { week: '4주', sermons: 2, md: 10, ppt: 4 },
  ]
  return (
    <div style={{ background:'#111827', border:'1px solid #1f2937', borderRadius:12, padding:20 }}>
      <h3 style={{ color:'#e2e8f0', fontSize:'0.8rem', marginBottom:16 }}>📖 설교 활동 현황</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis dataKey="week" tick={{ fill:'#6b7280', fontSize:11 }} />
          <YAxis tick={{ fill:'#6b7280', fontSize:11 }} />
          <Tooltip {...tooltipStyle} />
          <Legend wrapperStyle={{ color:'#94a3b8', fontSize:11 }} />
          <Line type="monotone" dataKey="sermons" name="설교" stroke="#7c3aed" strokeWidth={2} dot={{ fill:'#7c3aed' }} />
          <Line type="monotone" dataKey="md"      name="MD"  stroke="#22c55e" strokeWidth={2} dot={{ fill:'#22c55e' }} />
          <Line type="monotone" dataKey="ppt"     name="PPT" stroke="#f59e0b" strokeWidth={2} dot={{ fill:'#f59e0b' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
