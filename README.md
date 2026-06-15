# 🕊️ YeshuaWorld AI 지휘본부 (claude-hq)

> "마음을 다하고 목숨을 다하고 힘을 다하여 네 하나님 여호와를 사랑하라" — 신명기 6:5

## 개요
박준열 목사님 사역을 위한 AI 팀 지휘본부입니다.
Hermes 요셉이 관리하며, 매 세션 시작 시 `memory/CLAUDE_CONTEXT.json`을 읽어 현황을 파악합니다.

## 구조
```
claude-hq/
├── memory/
│   └── CLAUDE_CONTEXT.json   ← AI 기억 파일 (매 세션 로드)
└── projects/
    ├── hermes-hq/            ← 헤르메스 대시보드
    ├── praise-hq/            ← 찬양사령부
    └── sermon-system/        ← 설교사령부
```

## AI 팀
- **Hermes 요셉** — 실행 지휘자 (MacBook + NAS)
- **Claude** — 설계 참모 & 신학 고문
- **Sisyphus** — 반복 변환 작업

## 사역 플랫폼
- http://192.168.1.2:5500 — 대시보드 (내부)
- http://dashboard.yeshuaworld.org — 대시보드 (외부)
- yeshuaworld.org — 사역 본부

*최종 업데이트: 2026-06-12 | 담당: Hermes 요셉*
