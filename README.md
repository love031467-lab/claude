# claude
클로드 전용 저장소

## 포트폴리오 웹사이트

HTML/CSS/JS로 만든 개인 포트폴리오 사이트입니다.

### 로컬에서 실행하기

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000` 접속

### 커스터마이징

- `index.html` — 이름, 직무, 소개글, 프로젝트, 연락처 등의 텍스트를 자신의 정보로 수정하세요.
- `css/style.css` — `:root`의 색상 변수(`--accent` 등)를 바꾸면 전체 테마 색상이 바뀝니다.
- `js/script.js` — 다크모드 토글, 모바일 메뉴 등의 동작 스크립트입니다.

### 배포

GitHub Pages로 무료 배포할 수 있습니다: 저장소 Settings → Pages → Branch를 `main`(또는 배포용 브랜치)으로 설정하세요.
