# Deploy Guidelines

## 배포 전 필수 체크
- [ ] TEST-CHECKLIST.md 전체 통과
- [ ] REVIEW-CRITERIA.md 전체 통과
- [ ] SIMPLIFY-RULES.md 적용 완료

---

## Step 1: 포트 정리
```bash
lsof -ti:7778 | xargs kill -9 2>/dev/null
sleep 1
echo "포트 7778 정리 완료"
```

## Step 2: 환경변수 확인
```bash
cat ~/ai-family/sermon-command/.env.local | grep -E "ANTHROPIC|SUPABASE" | sed 's/=.*/=***/'
```

## Step 3: 빌드 테스트 (선택)
```bash
cd ~/ai-family/sermon-command
npm run build 2>&1 | tail -10
```

## Step 4: 개발 서버 실행
```bash
cd ~/ai-family/sermon-command
npm run dev &
sleep 5
curl -s -o /dev/null -w "%{http_code}" http://localhost:7778/
# → 200 이면 성공
```

## Step 5: 헬스체크
```bash
# 메인 대시보드
curl -o /dev/null -w "%{http_code}\n" http://localhost:7778/
# 영구기억 본부
curl -o /dev/null -w "%{http_code}\n" http://localhost:7778/memory
# API 채팅
curl -X POST http://localhost:7778/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"테스트"}]}' \
  -o /dev/null -w "%{http_code}\n"
```

## Step 6: 변경 로그 업데이트
```bash
echo "$(date '+%Y-%m-%d %H:%M'): [변경사항 요약]" >> ~/ai-family/sermon-command/CHANGELOG.md
```

## Step 7: GitHub Push (선택)
```bash
cd ~/claude-hq
git add -A
git commit -m "feat: [변경사항] $(date '+%Y-%m-%d')"
git push origin main
```

---

## Rollback 계획
```bash
# Next.js 재시작
lsof -ti:7778 | xargs kill -9 2>/dev/null
cd ~/ai-family/sermon-command && npm run dev &

# 파일 복원 (git 사용 시)
cd ~/ai-family/sermon-command
git checkout -- src/  # 마지막 커밋으로 복원
```

## 포트 현황 (충돌 방지)
| 포트  | 서비스             | 실행 명령                        |
|-------|--------------------|----------------------------------|
| 7777  | AI Family Hub      | python3 -m http.server 7777      |
| 7778  | 설교사령부 Next.js | npm run dev (sermon-command)     |
| 8888  | Home Hub           | python3 -m http.server 8888      |
| 5500  | NAS 대시보드       | NAS에서 실행                     |
| 5501  | Claude 프록시      | NAS에서 실행                     |
