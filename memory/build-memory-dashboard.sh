#!/bin/bash

echo "🧠 영구기억 본부 만들기 시작!"

# 1. 프로젝트 찾기
if [ -d ~/ai-family/sermon-command ]; then
  PROJECT=~/ai-family/sermon-command
elif [ -d ~/sermon-command ]; then
  PROJECT=~/sermon-command
else
  echo "❌ 프로젝트 폴더를 찾을 수 없습니다"
  exit 1
fi

echo "✅ 프로젝트: $PROJECT"

# 2. memory 페이지 폴더 생성
mkdir -p $PROJECT/src/app/memory

# 3. 영구기억 데이터 파일 생성
cat > $PROJECT/src/app/memory/memory-data.ts << 'DATA'
export const MEMORY_DATA = {
  lastUpdated: new Date().toISOString(),

  identity: {
    father: "JunPark 목사님",
    church: "GSCNY (뉴욕)",
    role: "담임목사",
    mission: "다국어 회중 목회"
  },

  aiFamily: [
    { name: "헤르메스",     tool: "Claude 대화창",      role: "기획/설계/코드작성/아버지와 직접 대화",  color: "#7c3aed" },
    { name: "요셉헤르",     tool: "Claude Code 터미널", role: "실제 파일생성/코드실행/서버실행",         color: "#6366f1" },
    { name: "요셉제미나이", tool: "Gemini",              role: "신학묵상/지식검색/설교자료 수집",         color: "#06b6d4" },
    { name: "요셉클루",     tool: "Clue",               role: "리서치/자료수집/웹검색",                  color: "#22c55e" },
    { name: "시시포스",     tool: "자동화",              role: "반복작업 자동화/DB저장/배포/크론",         color: "#f97316" },
    { name: "다윗",         tool: "Suno/YWO",            role: "예배음악 총괄/찬양곡 선정/YWO 오케스트라", color: "#22c55e" },
    { name: "에녹",         tool: "Claude",              role: "설교집 원고/KJV 검증/출판용 텍스트",      color: "#f59e0b" },
    { name: "요나단",       tool: "Canva",               role: "성도용 PPT/시각자료/예배 참여 자료",       color: "#ec4899" }
  ],

  commandChain: "아버지 명령 → 헤르메스 지휘 → Claude 실행 → 사역 완성",
  shema: "And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might. — Deuteronomy 6:5 (KJV)",

  dashboards: [
    { name: "설교사령부",   url: "localhost:7778",        status: "active",   path: "/",        icon: "📖" },
    { name: "영구기억본부", url: "localhost:7778/memory", status: "active",   path: "/memory",  icon: "🧠" },
    { name: "AI Family Hub",url: "localhost:7777",        status: "active",   path: "/",        icon: "🏛️" },
    { name: "Zion CC",      url: "localhost:7777/zion",   status: "active",   path: "/zion",    icon: "⚔️" },
    { name: "Home Hub",     url: "localhost:8888",        status: "active",   path: "/",        icon: "🏠" },
    { name: "NAS 헤르메스 HQ", url: "192.168.1.2:5500",  status: "active",   path: "/",        icon: "🖥️" },
    { name: "찬양사령부",   url: "localhost:7778/praise", status: "pending",  path: "/praise",  icon: "🎵" },
    { name: "찬양경배",     url: "localhost:7778/worship",status: "pending",  path: "/worship", icon: "🙏" }
  ],

  pipelines: [
    { id: "YW-SERMON-01", name: "주일 대설교 준비",    progress: 75,  status: "active"  },
    { id: "YW-PRAISE-01", name: "찬양 DB 100곡",       progress: 62,  status: "active"  },
    { id: "YW-PRAISE-02", name: "YWO AI 오케스트라",   progress: 15,  status: "active"  },
    { id: "YW-EDU-01",    name: "천국복음 MD 240개",   progress: 100, status: "done"    },
    { id: "YW-AUTO-01",   name: "n8n Docker 자동화",   progress: 40,  status: "pending" },
    { id: "YW-MEDIA-01",  name: "미디어 자동생성",     progress: 20,  status: "planning"}
  ],

  skill: {
    name: "Hermes Dashboard Agent Skill",
    version: "1.0",
    steps: [
      { num: 1, name: "Define/Spec",  desc: "사양 문서 작성 — UI, 데이터, 성능 요구사항" },
      { num: 2, name: "Plan",         desc: "Atomic 작업 분해 + 의존성 + 에지 케이스" },
      { num: 3, name: "Build",        desc: "한 atomic task씩 구현, 기존 스타일 준수" },
      { num: 4, name: "Verify/Test",  desc: "단위/통합/에지케이스 테스트 + 시각 검증" },
      { num: 5, name: "Review",       desc: "Doubt-Driven: 이 코드가 실패할 경우를 찾아라" },
      { num: 6, name: "Simplify",     desc: "불필요한 복잡성 제거, 재사용성 향상" },
      { num: 7, name: "Ship",         desc: "작은 단위 배포 + 변경 로그 + rollback 계획" }
    ],
    coreRules: [
      "코딩 전에 Spec + Plan 완료 필수 — 바로 코드 작성 금지",
      "모든 변경은 atomic 단위",
      "Test 없이 Ship 금지 (Beyoncé Rule)",
      "Doubt-Driven Review: clean context로 스스로 검증"
    ]
  },

  absoluteRules: [
    "설교 파일 절대 삭제 금지",
    "실제 파일 확인 후 보고",
    "NAS 중심 데이터 관리",
    "중요 작업 = 아버지 승인 후 실행",
    "모든 도메인은 예수 그리스도를 증거한다",
    "성경 인용은 KJV만 사용",
    "매 세션 YeshuaWorld_System.md 먼저 읽기"
  ],

  infrastructure: {
    nas: { ip: "192.168.1.2", user: "junpark", dashboard: "5500", proxy: "5501" },
    supabase: "https://edqrkqfgdcompphqizvz.supabase.co",
    github: "https://github.com/Gsccom/claude-hq",
    cloudflare: "yeshuaworld-tunnel (healthy)",
    telegram: "JosephHermes_bot"
  }
}
DATA

echo "✅ memory-data.ts 생성 완료"
echo "✅ 빌드 완료! http://localhost:7778/memory 에서 확인하세요"
SCRIPT

chmod +x ~/claude-hq/memory/build-memory-dashboard.sh
echo "✅ 스크립트 생성 완료"
