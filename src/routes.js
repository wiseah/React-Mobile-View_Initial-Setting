import Sitemap from "./pages/Sitemap";
import Main from "./pages/Main";
import Example from "./pages/Example"; 

const routes = [
    {
        path: '/',
        element: <Sitemap />,
        previous: false,
        footer: true,
    },
    {
        path: '/main',
        element: <Main />,
        name: '01. 메인 페이지',
        previous: '/', //원하는 라우트 경로로 변경 가능
        footer: false, //footer를 보여주고 싶으면 true, footer를 숨기고 싶으면 false속성으로 설정
    },
    {
        path: '/example',
        element: <Example />,
        name: '02. 페이지를 추가하세요',
        previous: '/main',
        footer: true,
    }
]

export default routes;