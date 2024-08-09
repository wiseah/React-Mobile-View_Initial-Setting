# React Mobile View 초기 세팅 오픈 소스 템플릿 [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fwiseah%2FReact-Mobile-View_Initial-Setting&count_bg=%23E6E6FA&title_bg=%23540090&icon=sourcegraph.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)


이 프로젝트는 React를 사용하여 모바일과 PC 환경 모두 지원하는 웹 애플리케이션을 쉽게 개발할 수 있도록 설계된 오픈소스 템플릿입니다. <br/>
반응형 디자인과 유연한 라우팅 시스템을 통해 다양한 디바이스에서 일관된 사용자 경험을 제공합니다.<br/>

<img width="1470" alt="examples" src="https://github.com/user-attachments/assets/40f97a6b-2461-4210-bf33-174e8d016dd1">
<details><summary>📸 응용 예시</summary><img width="1470" alt="image" src="https://github.com/user-attachments/assets/7ff6b655-c925-4a2b-905e-edefc74154d4"></details>

## 주요 기능

- React와 React Router를 활용한 SPA(Single Page Application) 구조
- 모바일 및 PC 환경 동시 지원
- 중앙 집중식 라우팅 관리
- 동적 레이아웃 컨트롤
- styled-components를 이용한 스타일링

## 시작하기

### 설치

1. 이 저장소를 클론합니다 <br/>
`git clone https://github.com/your-username/react-mobile-pc-view.git`
2. 프로젝트 디렉토리로 이동합니다 <br/>
`cd react-mobile-pc-view`
3. 필요한 패키지를 설치합니다 <br/>
`npm install`
4. 개발 서버를 실행합니다 <br/>
`npm start`

## 프로젝트 구조

- `src/App.js`: 애플리케이션의 메인 컴포넌트
- `src/routes.js`: 모든 라우트 정의
- `src/styles/Mobile.js`: 모바일 레이아웃 컴포넌트
- `src/pages/`: 각 페이지 컴포넌트들

## 사용 방법

### 새 페이지 추가하기

1. `src/pages/` 디렉토리에 새 컴포넌트 파일을 생성합니다.

2. `src/routes.js` 파일에 새 라우트를 추가합니다:

```javascript
import NewPage from './pages/NewPage';

const routes = [
  // ...기존 라우트들
  {
    path: '/new-page',
    element: <NewPage />,
    name: '새 페이지',
    previous: '/',
    footer: true,
  },
];
```

3. 필요한 경우 src/pages/Sitemap.js를 업데이트하여 새 페이지 링크를 추가합니다.

### 레이아웃 커스터마이징

`src/styles/Mobile.js` 파일에서 전체 레이아웃 스타일을 수정할 수 있습니다. <br/>
각 페이지 컴포넌트에서 styled-components를 사용하여 페이지별 스타일을 정의할 수 있습니다.

### 반응형 디자인

현재 이 템플릿은 **Iphone 13&14(width: 390px, height: 844px)** 에 맞춰져 있습니다. <br/>
`src/styles/Mobile.js` 파일의 Container 컴포넌트에서 최대 너비를 조정하여 모바일과 PC 뷰를 제어할 수 있습니다. <br/>
다른 크기를 원하시면 `Mobile.js`파일의 Content컴포넌트에서 `max-width:390px;` 속성을 원하는 크기로 변경해주시면 됩니다.

### 배경 바꾸기

`src/App.js` 파일의 Container 컴포넌트에서 `background-image: url('/backgroundImg.png');` 속성의 url을 바꿔주시면 됩니다.

### 기여하기
프로젝트 개선에 기여하고 싶으시다면 Pull Request를 보내주세요. 대규모 변경사항의 경우, 먼저 이슈를 열어 논의해 주시기 바랍니다.
