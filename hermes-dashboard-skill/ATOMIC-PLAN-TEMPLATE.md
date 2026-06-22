# Atomic Plan Template

## 사용법
각 작업을 아래 형식으로 분해.
완료 시 [ ] → [x] 체크.

---

## 작업 목록

### 레이어 0: 환경 설정 (의존성 없음)
- [ ] T-000: 포트 충돌 확인 (lsof -ti:7778 kill)
- [ ] T-001: .env.local 환경변수 확인
- [ ] T-002: next.config.js + tsconfig.json 확인

### 레이어 1: 데이터 레이어 (T-00x 완료 후)
- [ ] T-010: Supabase 클라이언트 (src/lib/supabase.ts)
- [ ] T-011: API route /api/chat (Claude 스트리밍)
- [ ] T-012: API route /api/generate (SSE 멀티 에이전트)
- [ ] T-013: 데이터 타입 정의 (src/types/)

### 레이어 2: 공통 컴포넌트 (T-01x 완료 후)
- [ ] T-020: Layout + 헤더
- [ ] T-021: 다크테마 색상 변수
- [ ] T-022: LoadingSkeleton
- [ ] T-023: ErrorBoundary

### 레이어 3: 페이지 컴포넌트 (T-02x 완료 후)
- [ ] T-030: [메인 컴포넌트]
- [ ] T-031: [서브 컴포넌트]
- [ ] T-032: [출력물 컴포넌트]

### 레이어 4: 통합 + Ship
- [ ] T-040: 전체 통합 테스트
- [ ] T-041: Doubt-Driven Review
- [ ] T-042: 배포 + CHANGELOG 업데이트

---

## 에지 케이스 체크리스트
- [ ] Claude API 키 없을 때 폴백 메시지
- [ ] Supabase 오프라인 → console.warn + 로컬 폴백
- [ ] 빈 입력 전송 방지
- [ ] 스트리밍 중 컴포넌트 unmount 처리
- [ ] 포트 EADDRINUSE 처리
