// const onClickAdd = () => {
//     // alert('yes');
//     //テキストを取得して、取得した後に空文字にする
//     const inputText = document.getElementById("add-text").value;
//     document.getElementById("add-text").value = "";
    
//     createIncompleteList(inputText);

// }

// //未完了リストから指定の要素を削除の関数
// const deleteFromIncompleteList = (target) => {
//     // const deleteTarget = deleteButton.parentNode;
//     document.getElementById("incomplete-list").removeChild(target);
// }

// //未完了リストに追加
// const createIncompleteList = (text) => {
//     //div生成
//     const div = document.createElement("div");
//     div.className = "list-row";

//     //liタグ生成
//     const li = document.createElement("li");
//     li.innerText = text;

//     //buttonタグ生成
//     const completeButton = document.createElement("button");
//     completeButton.innerText = "完了";
//     // console.log(completeButton);
//     completeButton.addEventListener("click", () => {
//         deleteFromIncompleteList(completeButton.parentNode);

//         //完了リストに追加する要素
//         const addTarget = completeButton.parentNode;

//         //TODO内容テキストを取得
//         const text = addTarget.firstElementChild.innerText;

//         //div以下を初期化
//         addTarget.textContent = null;

//         //liタグ生成
//         const li = document.createElement("li");
//         li.innerText = text;

//         //buttonタグ生成
//         const backButton = document.createElement("button");
//         backButton.innerText = "戻る";
//         backButton.addEventListener("click", () => {
//             // 押された親要素を削除
//             const deleteTarget = backButton.parentNode;
//             document.getElementById("complete-list").removeChild(deleteTarget);

//             //テキスト取得
//             const text = backButton.parentNode.firstElementChild.innerText;
//             // console.log(text);
//             createIncompleteList(text);
//         });

//         // 要素を生成
//         addTarget.appendChild(li);
//         addTarget.appendChild(backButton);

//         document.getElementById("complete-list").appendChild(addTarget);
//     });

//     const deleteButton = document.createElement("button");
//     deleteButton.innerText = "削除";
//     deleteButton.addEventListener("click", () => {
//         //押された削除ボタンの親タグ(div)を未完了リストから削除
//         deleteFromIncompleteList(deleteButton.parentNode);
//     });

//     // console.log(li)

//     //divタグの子要素に各要素を生成
//     div.appendChild(li);
//     div.appendChild(completeButton);
//     div.appendChild(deleteButton);

//     //未完了のリストに追加
//     document.getElementById("incomplete-list").appendChild(div)

// }

// document.getElementById("add-button").addEventListener("click", () => onClickAdd());



//アロー関数
const testfunc = (str) => str;

console.log(testfunc("fujisaki"));

const numfunc = (num,num2,num3,num4) => {
    return num + num2-num3+ num4;
}

console.log(numfunc(10, 20, 10, 30));

//分割代入 オブジェクト
const testProfile = {
    name: 'fujisaki',
    age:29
}

const { name, age } = testProfile;
// const message1 = '名前は' + testProfile.name + '年齢は' + testProfile.age;
const message1 = '名前は' + testProfile.name + '年齢は' + testProfile.age;
console.log(message1);

//分割代入 配列
const testProfile2 = ['fujisaki', 27,'野球'];
const [isname, isage,sport] = testProfile2;
const message2 =`名前は${isname} 年齢は${isage}歳です。趣味は${sport}`
// const message2 = 'name is ' + testProfile2[0] + '   age is ' + testProfile2[1];
console.log(message2);

//デフォルト値、引数
const sayHello = (user='gest') => console.log("こんにちは" + user + "さん");
sayHello(); 

//スプレッド構文
const arry1 = [10, 20];
console.log(...arry1);
console.log(arry1.length);

const numSum = (sum1, sum2) => console.log(sum1 + sum2);
numSum(...arry1); 
const arry2 = [...arry1];
arry2[0] = 100;
numSum(...arry2);

const arry3 = [...arry1, ...arry2];
console.log(arry3);

//map関数
const friendName = ['藤﨑', '文崇', '藤﨑2'];
// for (let i = 0; i <friendName.length; i++){
//     console.log(friendName[i]);
// };

// const friendName2 = friendName.map((names) => {
//     return names;
// });
// console.log(friendName2);

friendName.map((names) => console.log(names));
