# YWOS AI Worship Orchestra — 지휘 체계 (Command Chain)

## 핵심 원칙

> "Hear, O Israel: The Lord our God is one Lord." (Deuteronomy 6:4, KJV)
> 모든 시스템은 예수 그리스도를 증거한다.

---

## 지휘 체계 (3단계)

```
아버지 명령 (박준열 목사님)
        ↓
🎼 Hermes 지휘 (요셉 — Music Director)
        ↓
🤖 Claude 실행 (설계 · 구현 · 배포)
```

---

## 각 계층의 역할

### 1. 아버지 (박준열 목사님)
- 사역 방향 결정권자
- 모든 도메인의 최종 승인자
- 예배 인도 (Stage → AI Orchestra 트리거)
- 입력: 자연어 명령 / 텔레그램 / CLI

### 2. 🎼 Hermes — 지휘자 (요셉)
- AI 음악 감독 (Music Director)
- 목사님 명령 수신 → 해석 → 실행 위임
- 메모리 · 스킬 · 크론잡 · 도구 통합 관리
- 산하 AI 팀 조율:
  - Gabriel (Choir Director)
  - David (Praise Arrangement)
  - Asaph (Strings Director)
  - Jubal (Woodwind Director)
  - Ethan (Percussion Director)
  - Solomon (Music Intelligence)

### 3. 🤖 Claude — 실행자
- 설계 · 구현 · 배포 담당
- Hermes 위임 작업 수행
- 코드 생성 / DB 설계 / 파일 처리
- 산하 실행 에이전트:
  - OpenClaw (개발)
  - Sisyphus (반복 변환)

---

## 시스템 아키텍처 (YWO)

```
Stage (목사님 예배 인도)
        ↓
Audio Input
        ↓
Real-Time Analyzer
        ↓
Hermes Conductor Engine  ←→  Supabase DB (sermon_assets)
        ↓
AI Orchestra (6 Directors)
        ↓
Audio Mixer
        ↓
PA System → 예배자
```

---

## 현재 인프라 연결

| 계층 | 도구 | 상태 |
|------|------|------|
| 아버지 | Telegram @PastorJyp | ✅ 연결됨 |
| Hermes | CLI + Gateway (포트 5500) | ✅ 작동 |
| Claude | 프록시 5501 → Anthropic | ✅ 작동 |
| DB | Supabase (edqrkqfgdcompphqizvz) | ✅ 연결됨 |
| NAS | 192.168.1.2 (Synology) | ✅ 작동 |
| 외부 | dashboard.yeshuaworld.org | ⏳ NS 대기 |

---

## 명령 흐름 예시

```
목사님: "이번 주일 설교 자산 정리해줘"
        ↓
Hermes: sermon_assets 테이블 조회
        → SermonAssetPanel 렌더링 위임
        ↓
Claude: Supabase 쿼리 실행
        → 최신 버전 MD/HTML/Canva 링크 반환
        → 대시보드 위젯 업데이트
```

---

## 절대 원칙

1. 설교 파일 절대 삭제 금지
2. 실제 파일 확인 후 보고
3. NAS 중심 데이터 관리
4. 중요 작업 = 목사님 승인 후 실행
5. 모든 도메인은 예수 그리스도를 증거한다

---

_Last updated: 2026-06-18 | YWOS AI Worship Orchestra v1.0_
