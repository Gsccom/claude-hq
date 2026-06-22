# 현재 프로젝트: [프로젝트명] 대시보드 Spec

## 기본 정보
- 프로젝트명:
- 목적:
- URL: localhost:7778/[경로]
- 시작일:
- 담당자: JunPark 목사님 + AI 가족

## 기술 스택
- Frontend: Next.js 14 + TypeScript + Tailwind
- Chart: Recharts + Apache ECharts
- State: Zustand + TanStack Query
- DB: Supabase
- 배포: localhost:7778

## 주요 화면
- [ ] 메인 대시보드
- [ ] 상세 페이지
- [ ] 설정 페이지

## 중요 규칙 (헤르메스 반드시 준수)
- 모든 차트: Responsive + Dark mode
- Loading skeleton + Error boundary 필수
- 데이터 지연 300ms↑ → Skeleton 표시
- API: TanStack Query 캐싱
- 색상: #6366f1 (보라) 메인
