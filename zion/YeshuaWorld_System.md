# 🏛️ YeshuaWorld Zion Command Center
# Single Source of Truth — 모든 AI가 세션 시작 시 반드시 읽는 파일

> "우리는 각자 일하지 않으며, 예수 그리스도를 머리로 둔 하나의 유기적인 몸(Body)으로서 움직인다."

---

## 📋 글로벌 원칙

1. **Single Source of Truth** — 작업 전 이 파일 Sync, 작업 후 진척도 업데이트 필수
2. **무오성 원칙** — 모든 성경 인용은 KJV 원문만 사용, 모든 사역의 중심은 예수 그리스도
3. **산출물 3각화** — 모든 설교 세션은 [MD 원고] + [PPT] + [HTML] 동시 출력 → NAS 보관
4. **지휘 체계** — 아버지 명령 → 헤르메스 지휘 → Claude 실행
5. **설교 파일 절대 삭제 금지**

---

## 🗺️ 실시간 프로젝트 네비게이션

### 🔴 파이프라인 1: 설교사령부 (YW-SERMON)

| ID | 세션 | 상태 | 진척도 | 담당 AI |
|----|------|------|--------|---------|
| YW-SERMON-01 | 주일 대설교 준비 | 🔄 진행 중 | 75% | 헤르메스(총괄), 클로드(초안), 요셉젬(감수) |

**NAS 경로:** `/volume1/YeshuaWorld/Sermon/YW-SERMON-01/`

출력 현황:
- [✓] `YW-SERMON-01_v1.md` — 원고 파일
- [🔄] `YW-SERMON-01_v1.ppt` — PPT 디자인
- [🔄] `YW-SERMON-01_v1.html` — 웹 배포용

---

### 🟢 파이프라인 2: 인프라 자동화 (YW-AUTO)

| ID | 세션 | 상태 | 진척도 | 담당 AI |
|----|------|------|--------|---------|
| YW-AUTO-01 | n8n & Docker 워크플로우 동기화 | ⏳ 대기 중 | 40% | 헤르메스, Ollama |

**NAS 경로:** `/volume1/YeshuaWorld/Automation/YW-AUTO-01/`

---

### 🔵 파이프라인 3: 미디어 콘텐츠 배포 (YW-MEDIA)

| ID | 세션 | 상태 | 진척도 | 담당 AI |
|----|------|------|--------|---------|
| YW-MEDIA-01 | 가상환경 기반 미디어 자동생성 | 🛑 설계 중 | 20% | 헤르메스 |

---

### 🎵 파이프라인 4: 찬양사령부 (YW-PRAISE)

| ID | 세션 | 상태 | 진척도 | 담당 AI |
|----|------|------|--------|---------|
| YW-PRAISE-01 | 찬송가 + CCM DB 100곡 구축 | 🔄 진행 중 | 62% | 헤르메스, 클로드 |
| YW-PRAISE-02 | YWO AI 오케스트라 구축 | 🔄 진행 중 | 15% | 헤르메스, 클로드 |

**로컬 경로:** `~/찬양사령부/08_웹사이트/data/songs_db.json`
**NAS 경로:** `/volume1/설교Mp3/찬양사령부/`

---

### 🎼 파이프라인 5: YWO 오케스트라 (YW-ORCH)

| ID | 세션 | 상태 | 진척도 | GitHub |
|----|------|------|--------|--------|
| YW-ORCH-01 | Conductor Engine | 🔄 진행 중 | 20% | ywo-conductor |
| YW-ORCH-02 | 6 Directors 구현 | 🛑 설계 중 | 5% | ywo-orchestra |
| YW-ORCH-03 | WebRTC 무대 입력 | 🛑 설계 중 | 0% | ywo-stage |

---

## 🤖 AI 명령 프로토콜 (Hermes → 하위 AI)

```
[명령어 구조]
1. 당신은 예슈아월드 몸의 지체로서 본 세션에 참여합니다.
2. 타겟 세션 코드: [YW-SERMON-01 / YW-PRAISE-01 / ...]
3. 수행할 태스크: [구체적 작업 내용]
4. 규칙: 작업 완료 후 YeshuaWorld_System.md 진척도를 즉시 갱신하고 로그를 남기십시오.
5. KJV 성경만 인용, 설교 파일 절대 삭제 금지.
```

---

## 📡 인프라 현황

| 서비스 | 주소 | 상태 |
|--------|------|------|
| 대시보드 (NAS) | http://192.168.1.2:5500 | ✅ 작동 |
| Claude 프록시 | :5501 | ✅ 작동 |
| AI Family Hub | http://localhost:7777 | ✅ 작동 |
| Zion Command | http://localhost:7777/zion/ | ✅ 작동 |
| Supabase DB | edqrkqfgdcompphqizvz | ✅ 연결 |
| Cloudflare 터널 | yeshuaworld-tunnel | ✅ healthy |
| dashboard.yeshuaworld.org | NS 변경 대기 | ⏳ 대기 |
| Telegram Bot | JosephHermes_bot | ✅ 연결 |

---

## 📝 세션 로그

| 날짜 | 세션 | 완료 작업 | 담당 AI |
|------|------|-----------|---------|
| 2026-06-18 | 시스템 초기화 | COMMAND_SYSTEM.json, AI Family Hub, songs_db 62곡 | 헤르메스+클로드 |
| 2026-06-18 | YWO 구축 | 5개 GitHub 저장소, Conductor Engine v0.1 | 헤르메스+클로드 |
| 2026-06-18 | Zion CC 구축 | 본 파일 + 대시보드 연동 | 헤르메스+클로드 |

---

*Updated: 2026-06-18 | YWOS Zion Command Center v1.0*
*"물 흐르듯 사역이 이루어질 수 있게" — JunPark 목사님*
