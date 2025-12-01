# KT CCTV Landing Page (Frontend Only)

KT CCTV 랜딩 페이지 프론트엔드 전용 프로젝트입니다.

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하세요.

### 프로덕션 빌드

```bash
npm run build
npm start
```

## 백엔드 API 설정

이 프로젝트는 프론트엔드 전용입니다. 폼 제출이 동작하려면 백엔드 API 서버가 필요합니다.

`public/config.js` 파일에서 백엔드 API URL을 설정하세요:

```javascript
window.APP_CONFIG = {
  API_BASE_URL: 'https://your-backend-server.com', // 백엔드 API URL
};
```

### 필요한 API 엔드포인트

백엔드 서버에서 다음 엔드포인트를 구현해야 합니다:

- `POST /landing/api/inquiry` - 상담/예약 신청 접수
- `GET /api/reservation/blocked-dates` - 예약 불가 날짜 조회
- `POST /api/reservation/upload` - 서류 파일 업로드

## 프로젝트 구조

```
kt-cctv-landing/
├── app/
│   ├── landing/
│   │   ├── components/     # 랜딩 페이지 컴포넌트
│   │   │   ├── ReservationForm.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HowToParticipate.tsx
│   │   │   └── SpecialBenefits.tsx
│   │   ├── lib/           # 유틸리티 함수
│   │   │   ├── utils.ts
│   │   │   └── validations.ts
│   │   └── globals.css    # 전역 스타일
│   ├── policies/
│   │   └── page.tsx       # 개인정보처리방침 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── public/
│   └── config.js          # 런타임 설정
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 기술 스택

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Zod (유효성 검사)
