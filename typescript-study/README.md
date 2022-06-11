# Create a new React app to study Typescript

1. npx create-react-app 앱이름 --template typescript
   앱의 기본 파일들이 생성됨. Typescript에서는 .tsx 파일을 사용하게 된다.

2. 앞서 styled-components와 Theme을 공부중이었으므로 해당 코드를 옮겨왔다.
   but Typescript는 styled-components의 타입을 이해하지 못한다.

3. npm i styled-components
   일단 이 앱은 새로 생성한 앱이므로 아직 styled-components가 설치되어있지 않으니 설치해주었다.

4. npm i --save-dev @types/styled-components
   명령어를 실행해서 styled-components의 타입을 정의해 주었다.
   (@types 에는 많은 사람들이 npm 저장소에 정리해둔 다양한 패키지의 타입이 정의되어 있다)
   (여러 사람이 styled-components의 소스코드를 보고 Typescript에게 설명해 줄 말을 만들어 내서 정리해 둔 것)
   (from DefinitelyTyped community : https://github.com/DefinitelyTyped/DefinitelyTyped)

5. Typescript 는 앱이 실행되기 전에 오류를 알려준다. (유저가 에러를 만나기 전에 처리)
   Prop Types는 앱이 실행되고나서 콘솔에 오류를 알려준다. (런타임 에러 - 결국 유저가 만나는 에러)
   그래서 사전에 오류를 방지할수있게 해주는 Typescript를 사용하는 것
