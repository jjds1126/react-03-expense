import {useState} from "react";

function App() {
    // 화면에 대한 설계를 진행할 떄
    // 목록(array)을 이루는 데이터 개념은 각각의 `항목` 이라고 볼 수 있으며
    // `항목` 이라는 데이터 개념은 3가지 (구분, 내용, 금액)이 모여서 이루어지는 개념임
    // 그에 따라 이 `항목` 을 표현할 수 있는 자바스크립트 타입은 ` 객체` 이고,
    // `구분, 내용, 금액` 은 `항목` 객체의 프로퍼티라고 할 수 있다.

    // 사용자에게 입력받아야 되는 정보는 `구분, 내용, 금액` 3가지 이고,
    // 각각의 프로퍼티들은 별개의 input이나 select로 받아야 되며
    // 사용자가 입력한 값은 또 다시 별개의 state로 관리한다.

    const [tirle, setTitle] = useState(""); // 내용을 담당하는 state
    const [amount, setAmount] = useState("") // 금액을 담당하는 state
                                                             // 금액은 숫자잖아요? 왜 0이 아니죠?
    // 화면에 사용되는 input은 등록된 값을 무조건 string으로 돌려줌
    // 그래서 우리는 저 값을 사용을 할 때 string을 number로 변환해서 사용해야함
    return <></>;
}

export default App;