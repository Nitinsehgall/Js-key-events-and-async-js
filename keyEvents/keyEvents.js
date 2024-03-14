// console.log("jai mata di ");

const insert=document.querySelector('.insert');

let sum=()=>{

    console.log("hello you pressed a key");
}
window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <div class='color'>

    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key==" " ?"space":e.key
    }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>

    </div>
    `
});