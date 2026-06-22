# Simplify Rules

## 원칙
"완성된 코드에서 제거할 수 있는 것을 찾아라."

---

## 1. 컴포넌트 단순화
- [ ] 100줄 이상 컴포넌트 → 분리 고려
- [ ] 동일한 JSX 패턴 3회↑ → 공통 컴포넌트 추출
- [ ] props drilling 3단계↑ → Context 또는 Zustand 사용

## 2. 스타일 단순화
- [ ] 인라인 스타일 반복 → CSS 변수 또는 Tailwind 클래스
- [ ] 매직 넘버 → 상수 (const HEADER_HEIGHT = 48)
- [ ] 색상 하드코딩 → design token 사용

## 3. 로직 단순화
- [ ] 중첩 if/else 3단계↑ → early return 패턴
- [ ] 긴 조건식 → 명확한 변수명으로 분리
- [ ] 비슷한 함수 → 파라미터화

## 4. 데이터 단순화
- [ ] 중복 API 호출 → React Query 캐싱
- [ ] 여러 useState → useReducer 또는 Zustand
- [ ] 복잡한 데이터 변환 → 유틸 함수 분리

## 5. YeshuaWorld 특화 단순화
- [ ] 에이전트 설정 → AGENTS_CONFIG 배열로 통합
- [ ] 색상 시스템 → CSS 변수 (--color-purple: #7c3aed)
- [ ] 포트 충돌 처리 → 공통 스크립트 재사용
- [ ] Supabase 오프라인 폴백 → 공통 훅 (useSupabase)

## 체크 완료 기준
리팩토링 후 기능은 동일하고,
코드 라인 수가 줄거나 가독성이 높아져야 함.
