import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {isValidDateValue} from "@testing-library/user-event/dist/utils";

function App() {
    let [title,setTitle]=useState(['맛집추천','옷집추천','아무거나 추천']); //배열느낌으로 사용
    let post ='2023.11.02';
    let [hit,setHit]=useState([0,0,0]);
    let [modal,setModal]=useState(false); //스위치 느낌

    [1,2,3].map(function(a){
       return '123456'
    })//함수안의 기능을 배열 인덱스 수 만큼 반복실행




  return (
    <div className="App">
      <div className="black-nav">
          <h4>블로그</h4>
      </div>
        <button onClick={()=>{
            let copy2 =[...title];
            copy2.sort()
            setTitle(copy2);

        }}>가나다 순으로 정리</button>
        <div className="list">
            <div>{title[0]} <span onClick={()=>{setHit(hit+1)}}>👍</span>
                {hit}</div> {/*state는 등호로 변경 x 실제로는 바뀌나 반영은 안됨  변경하고싶으면 state변경합수 써서 변경할것 등호 절대 x*/}
            <p>{post}</p>
        </div>
        <div className="list">
            <div>{title[1]}</div>
            <p>{post}</p>
        </div>
        <div className="list">
            <h4 onClick={()=>{
                let copy3 = modal;
                copy3=!copy3;
                setModal(copy3)
            }}>{title[2]}</h4>
            <p>{post}</p>
            <button onClick={()=>{
                let copy =[...title];/*state 를 변경할일이 있을때는 카피본을 만들고 카피본을 수정해야함 원본은 최대한 보존*/
                /*레퍼런스 데이터 타입 찾아보기*/
                /*위와 같이 복사해야 제대로 복사가됨*/
                copy[0]='여자코트추천'; /*array /object 특징 ->  data 는 ram 에 변수는 좌표값만 지정해줌 */
                setTitle(copy);
            }}>변경하기</button>
        </div>
        {
          title.map(function (a,i){
              return        ( <div className="list">
                  <div>{title[i]} <span onClick={()=>{setHit(hit[i]+1)}}>👍</span>
                  {hit[i]}</div>
                  <p>{post}</p>
              </div>)
          })  //for if 이런거 쓰지마라, array 안에 태그 입력해도 잘나온다!
            //두번째는 i 1씩증가하는 수
            //반복생성한 태그들은 유니크한 키값이 필요함
        }


        {
            modal == true ? <Modal/> : null
                /*html 작성공간에 if문 쓰지마라*/
                /*html 작성공간에 if문 쓰고싶으면 삼항연산자 써라*/
                /*html ui를 만드는 패턴*/
        }
    </div>

  );
}
function Modal(){
    return(
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
/*의미없는 태그 대신 <></> 같은 fragment 문법이 있음*/
/* 컴포넌트 사용 할 경우
* 1. 반복적인 html 축약할때
* 2. 큰페이지들 (페이지 전환)
* 3. 자주변경되는 것들
*
* 단점 컴포넌트를 사용할때 state 를 못가져옴 why? 지역변수로 선언했기 때문에 전역변수가 아님
* */

    )
}
/*동적 ui 만들기
*
* html css 로 디자인 미리 짜두기
* ui 의 현재 상태를 state 로 저장
* state 에 따라 ui 가 어떻게 보일지 생각
*
*
* */

export default App;
