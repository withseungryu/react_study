# webpack(웹팩)이란 무엇인가?

![webpack](data:image/png;base64,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)





***

🙋‍♂️ 종종 React, vue와 같은 프레임워크를 이용해 웹을 만들 때, **webpack**이라는 단어를 많이 보실 수 있을 것입니다.

web-pack이라는 단어를 볼때마다, '음, web-pack은 자주 등장하니 프레임워크를 구성하는 중요한 라이브러리겠지' 라고 생각하며 넘어갔을 수도 있습니다.

하지만 그냥 넘어가는 것보다 간단히 무엇을 하는 라이브러리인지 알고 가는 것 또한 중요하다고 생각합니다.



#### 👉 webpack 이란 무슨 라이브러리일까요?

webpack에 대한 위키백과의 설명을 보면, 

*웹팩(Webpack 또는 webpack)은 [오픈 소스](https://ko.wikipedia.org/wiki/오픈_소스_소프트웨어) [자바스크립트](https://ko.wikipedia.org/wiki/자바스크립트)(JS) 모듈 번들러이다.*

*웹팩은 의존성이 있는 모듈을 취하여 해당 모듈을 대표하는 정적 자산들을 생성한다.*

이라고 볼 수 있는데,

즉, webpack은 **모듈 번들러** 라이브러리입니다.

모듈 번들러란 여러개의 나누어져 있는 파일들을 하나의 파일로 만들어주는 것을 말합니다.



#### 👉  그렇다면 왜? web-pack과 같은 모듈 번들러를 사용할까요?

웹 클라이언트 부분을 개발 할 때, javascript를 이용해 인터랙티브한 효과를 넣어 줄 수 있으며, 여러가지 프레임워크로 더 편리하게 웹을 만들 수 있습니다. 

옛날에는 웹을 구현한다고 해도, js파일들의 수가 많지 않아, 따로 모듈화를 할 필요가 없어지만, 점점 시간이 지나 js파일들의 수가 많아져 중복되는 파일 증가, 코드를 불러오기 위한 네트워킹 비용 증가 등 많은 문제들이 등장하기 시작합니다.

여기서 만들어진 js파일들 중 중복되는 기능들을 하는 파일들끼리 하나의 모듈로 만들어 소스코드의 규모를 줄이고, 재사용성을 좋게 하기위해 **모듈화**를 합니다.

즉, 모듈 번들러란 여러가지 파일들을 묶어주는 것(bundler), 모듈화를 통해 네트워킹 비용 감소를 해주는 것이라고 생각하면 됩니다.

![bundler](https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F991224375B091F2C08){: width="600px" height="600px"}



#### 👉  그렇다면, 왜 많은 프레임워크들은 모듈 번들러로서 Webpack을 사용하고 있을까요?

모듈번들러로 webpack뿐 아니라 Browsify, Grunt, Gulp등 많은 모듈 번들러가 존재하지만,

webpack의 수행능령(Performance)가 뛰어나 많은 프레임워크들이 사용하고 있습니다.



#### 👉  Web-pack의 주요 개념

#### 1. Entry

- 의존성 그래프의 시작점을 웹팩에서는 엔트리(Entry)라고 한다.
- 웹팩은 엔트리를 통해서 필요한 모듈을 로딩하고 하나의 파일로 묶는다.

#### 2. Output

- 엔트리에 설정한 자바스크립트 파일을 시작으로 하나로 묶는다. 
- 그후 번들된 결과물을 처리할 위치를 output에 기록한다.

#### 3. Loader

- 웹팩은 오직 JavaScript와 Json만 이해할 수 있다.
- 로더는 다른 Type의 파일(img, font, stylesheet 등)을 웹팩이 이해하고 처리 가능한 모듈로 변환 시키는 작업을 한다.

#### 4. Plugin

- 로더가 파일단위로 처리하는 반면 플러그인은 번들된 결과물을 처리한다.
- 로더가 변환하는 동안 플러그인은 (bundle optimization, asset management and injection of environment)과 같은 일을 진행할 수 있다.

***

😄 자 이제 webpack의 기능을 알았기 때문에, webpack이라는 단어를 볼 때마다, '아 이것은 모듈번들러 기능을 위한 라이브러리구나'라는 알 수 있을 것입니다.

궁금하신 것이 있으시면 언제든지 댓글 달아주세요!

 







