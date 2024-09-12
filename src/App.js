import { useState } from 'react';
import './App2.css';
import Box from './component/Box';


// 1. 박스 2개(사용자, 사진, 결과) 그리기
// 2. 하단에 가위, 바위, 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보인다.
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3과 4의 결과로 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다.(이기면-초록, 비기면-검정, 지면-빨강)

const choice = {
  rock:{
    name:"Rock",
    img:"https://nehalhazem.github.io/rockPaperScissors.io/img/rock.png",
    alt:"바위",
  },
  scissors:{
    name:"Scissors",
    img:"https://nehalhazem.github.io/rockPaperScissors.io/img/scissors.png",
    alt:"가위",
  },
  paper:{
    name:"Paper",
    img:"https://nehalhazem.github.io/rockPaperScissors.io/img/paper.png",
    alt:"보",
  }
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value", randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  };
  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    // user == computer tie
    // user == rock, computer == "scissors" user 이긴거지
    // user == "rock" computer == paper   user 진거지
    // user == scissors computer paper    user 이긴거지
    // user == scissors computer rock     user 진거지
    // user == paper computer rock   user 이긴거지
    // user paper computer scissors user 진거지

    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };
  return (
    <div className='App'>
      <div className='contain'>
        <div className='scoreBox'>
          점수
        </div>
        <div className="main">
          <Box title="User" item={userSelect} result={result} />
          <Box title="Computer" item={computerSelect} result={result} />
        </div>
        <div className="buttonList">
          <button onClick={() => play("scissors")}>
            <img src='https://nehalhazem.github.io/rockPaperScissors.io/img/scissors.png' alt='Scissors'></img>
          </button>
          <button onClick={() => play("rock")}>
          <img src='https://nehalhazem.github.io/rockPaperScissors.io/img/rock.png' alt='Rock'></img>
          </button>
          <button onClick={() => play("paper")}>
            <img src='https://nehalhazem.github.io/rockPaperScissors.io/img/paper.png' alt='Paper'></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
