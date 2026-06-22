// ============================================================
// examples/filter-example.tsx
// 다크테마 필터 + 검색 예시
// ============================================================
'use client'
import { useState } from 'react'

// ── 공통 Select 컴포넌트 ─────────────────────────────────────
export function DarkSelect({ label, options, value, onChange }: {
  label: string
  options: { value: string; label: string }[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:4 }}>
      <label style={{ fontSize:'0.6rem', color:'#4b5563' }}>{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)}
        style={{ background:'#1f2937', border:'1px solid #374151', color:'#e2e8f0',
          fontSize:'0.68rem', padding:'4px 8px', borderRadius:6, outline:'none', cursor:'pointer' }}
        onFocus={e => e.target.style.borderColor = '#6366f1'}
        onBlur={e  => e.target.style.borderColor = '#374151'}>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  )
}

// ── 검색 인풋 ────────────────────────────────────────────────
export function DarkSearch({ value, onChange, placeholder = '검색...' }: {
  value: string; onChange: (v: string) => void; placeholder?: string
}) {
  return (
    <input value={value} onChange={e => onChange(e.target.value)}
      placeholder={`🔍 ${placeholder}`}
      style={{ background:'#1f2937', border:'1px solid #374151', color:'#e2e8f0',
        fontSize:'0.72rem', padding:'7px 12px', borderRadius:8, outline:'none',
        fontFamily:'inherit', width:'100%' }}
      onFocus={e => e.target.style.borderColor = '#6366f1'}
      onBlur={e  => e.target.style.borderColor = '#374151'}
    />
  )
}

// ── 탭 버튼 ──────────────────────────────────────────────────
export function TabButtons({ tabs, active, onSelect, colors }: {
  tabs: string[]
  active: string
  onSelect: (t: string) => void
  colors?: Record<string, string>
}) {
  return (
    <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
      {tabs.map(tab => (
        <button key={tab} onClick={() => onSelect(tab)}
          style={{
            padding:'6px 12px', borderRadius:8, fontSize:'0.65rem',
            fontWeight:600, cursor:'pointer', border:'none', transition:'all .15s',
            background: active === tab ? (colors?.[tab] || '#6366f1') : '#1f2937',
            color: active === tab ? '#fff' : '#6b7280'
          }}>
          {tab}
        </button>
      ))}
    </div>
  )
}

// ── 사용 예시 ────────────────────────────────────────────────
export function FilterBarExample() {
  const [search, setSearch]   = useState('')
  const [type, setType]       = useState('전체')
  const [language, setLang]   = useState('한국어')

  return (
    <div style={{ display:'flex', gap:10, flexWrap:'wrap', padding:'10px 0' }}>
      <DarkSearch value={search} onChange={setSearch} placeholder="설교 제목 검색..." />
      <DarkSelect label="유형" value={type} onChange={setType}
        options={['전체','강해','주제','내러티브','절기','전도'].map(v => ({ value:v, label:v }))} />
      <DarkSelect label="언어" value={language} onChange={setLang}
        options={['한국어','영어','한영병행','스페인어'].map(v => ({ value:v, label:v }))} />
    </div>
  )
}
