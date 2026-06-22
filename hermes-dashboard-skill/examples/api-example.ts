// ============================================================
// examples/api-example.ts
// Claude API 스트리밍 + Supabase 연동 예시
// ============================================================

// ── Claude 스트리밍 클라이언트 훅 ────────────────────────────
export async function streamClaude(
  messages: { role: 'user' | 'assistant'; content: string }[],
  onChunk: (text: string) => void,
  onDone: () => void,
  systemPrompt?: string
) {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, systemPrompt })
    })
    if (!res.ok) throw new Error(`API ${res.status}`)

    const reader = res.body?.getReader()
    const decoder = new TextDecoder()

    while (reader) {
      const { done, value } = await reader.read()
      if (done) break
      onChunk(decoder.decode(value, { stream: true }))
    }
    onDone()
  } catch (err) {
    console.warn('[Claude] 스트리밍 실패, 폴백 응답 사용:', err)
    onChunk('API 연결 실패. ANTHROPIC_API_KEY를 .env.local에 설정해주세요.')
    onDone()
  }
}

// ── SSE 에이전트 스트림 소비 ──────────────────────────────────
export interface AgentEvent {
  type: 'agent_start' | 'agent_progress' | 'agent_done' | 'output_ready' | 'complete'
  agentId?: string
  progress?: number
  message?: string
  outputId?: string
  content?: string
}

export async function streamAgents(
  config: Record<string, string>,
  onEvent: (event: AgentEvent) => void
) {
  try {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
    })

    const reader = res.body?.getReader()
    const decoder = new TextDecoder()

    while (reader) {
      const { done, value } = await reader.read()
      if (done) break
      const text = decoder.decode(value, { stream: true })

      for (const line of text.split('\n')) {
        if (!line.startsWith('data: ')) continue
        try {
          const event: AgentEvent = JSON.parse(line.slice(6))
          onEvent(event)
        } catch { /* 잘린 청크 무시 */ }
      }
    }
  } catch (err) {
    console.warn('[Agents] SSE 실패, 오프라인 시뮬레이션 사용:', err)
    // 폴백: 오프라인 시뮬레이션 트리거
    onEvent({ type: 'agent_start', agentId: 'hermes', message: '오프라인 모드' })
  }
}

// ── Supabase 저장 (오프라인 폴백 포함) ───────────────────────
export async function saveToSupabase(table: string, data: Record<string, unknown>) {
  const url  = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) {
    console.warn('[Supabase] 환경변수 미설정 — 로컬 저장으로 대체')
    return { success: false, offline: true }
  }
  try {
    const res = await fetch(`${url}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': key,
        'Authorization': `Bearer ${key}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(data)
    })
    return { success: res.ok, status: res.status }
  } catch (err) {
    console.warn('[Supabase] 연결 실패 — 오프라인 모드:', err)
    return { success: false, offline: true }
  }
}
