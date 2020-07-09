import React from 'react';
import {Menu} from './Menu';

const data: data[]= [
  {
    name: "구운 연어",
    ingredients: [
      {name: "연어", amount: 500, measurement: "그램"},
      { name: "잣", amount: 1, measurement: "컵" },
      { name: "버터 상추", amount: 2, measurement: "컵" },
      { name: "옐로 스쿼시", amount: 1, measurement: "개" },
    ],
    steps: [
      "오븐을 350도로 예열한다",
      "유리 베이킹 그릇에 올리브 오일을 두른다",
      "연어, 마늘, 잣을 그릇에 담는다.",
      "오븐에서 15분간 익힌다.",
      "오븐에서 그릇을 꺼내서 15분간 식힌 다음 상추를 곁들여서 내놓는다.",
    ]
  },

  {
    name: "생선 타코",
    ingredients: [
      { name: "흰살 생선", amount: 500, measurement: "그램" },
      { name: "치즈", amount: 1, measurement: "컵" },
      { name: "연어", amount: 500, measurement: "그램" },
      { name: "연어", amount: 500, measurement: "그램" },
    ],
    steps: [
      "생선을 그릴에 익힌다",
      "또띠아 3장 위에 생선을 얹는다.",
      "유리 베이킹 그릇에 올리브 오일을 두른다"
     
    ]
  },

]

function App() {
  return (
    <div className="App">
      <Menu recipes={data} title="맛있는 조리법"></Menu>
    </div>
  );
}

export default App;
