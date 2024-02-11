# NavbarStory
UI 요소 중 가장 까다롭고 중요한 요소인 네비바. 
네비바 전문 스토리북입니다.

## 배포주소


## 명령어

1. 설치
   ```
   npx sb init
   ```
2. 실행
   ```
   npm run storybook
   ```
3. 배포
   ```
   npm run build-storybook
   ```
## code 미리보기 추가하기
1. storysource 애드온 설치
   ```
   npm install @storybook/addon-storysource --save-dev
   ```
2. .storybook/main.js 다음과 같이 수정하기
   ```
   /** @type { import('@storybook/react-webpack5').StorybookConfig } */
   const path = require('path');

   const config = {
   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
   addons: [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/preset-create-react-app",
      "@storybook/addon-onboarding",
      "@storybook/addon-interactions",
      "@storybook/addon-storysource" // 애드온 추가
   ],
   framework: {
      name: "@storybook/react-webpack5",
      options: {
         builder: {
         useSWC: true,
         },
      },
   },
   docs: {
      autodocs: "tag",
   },
   staticDirs: ["../public"],
   webpackFinal: async (config) => {
      config.module.rules.push({
         test: /\.stories\.@(js|jsx|mjs|ts|tsx)$/,
         use: [{ loader: require.resolve('@storybook/source-loader') }],
         enforce: 'pre',
         include: [path.resolve(__dirname, '../src')],
      });
   
      return config;
   },
   
   };
   export default config;
   ```

## 주의사항

1. `export default`의 `title` 바꾸면 서버 껐다켜야됨
2. 인트로 페이지 수정은 `Configure.mdx`의 내용 바꾸면 됨
