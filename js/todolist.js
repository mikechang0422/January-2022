//透過 querySelector 選取 input 欄位
const inputVal = document.querySelector('#inputVal')
//透過 querySelector 選取 button 欄位(新增按鈕)
const addTodoBtn = document.querySelector('#addTodoBtn')
//宣告全域變數 todoData 來接組出的物件資料
let todoData = []

//監聽是否點擊新增按鈕
addTodoBtn.addEventListener('click', addTodo)
//一點擊就執行 addTodo()
function addTodo() {
    // 組出未來要用到的物件
    let todo = {
    // input 的值
        txt: inputVal.value,
        // id 用 getTime() 取毫秒
        id: new Date().getTime(),
        //紀錄待辦事項完成狀態
        complete: false
    }
    //防呆 確保有填入文字
    if (todo.txt.trim() !== '') {
    //要塞在第一筆資料，所以用 unshift 把組好的 todo 物件賦予到外層的 todoData 
        todoData.unshift(todo)
        // 把 input 欄位清空
        inputVal.value = '' //清空
    }

    //跑 render 函式，把外層的 todoData 放進去
    render(todoData)
    updateList()
}

//透過 querySelector 選取要放入資料的 ul
const todoList = document.querySelector('#todoList')
//渲染的函式
function render(todo) {
    let str = ''
    //透過 todoData 跑迴圈
    todo.forEach((item) => {
        //將 todo 的 id 透過 data-id 埋進去
        //將是否打勾埋在 input 標籤內
        //將字放進去
        str += `<li data-id="${item.id}">
          <label class="checkbox" for="">
            <input type="checkbox" ${item.complete ? 'checked' : ''}/>
            <span>${item.txt}</span>
          </label>
          <a href="#" class="delete"></a>
        </li>`
    })
    //最後 innerHTML 把組好的字串賦予給 todoList
    todoList.innerHTML = str
}

//刪除單筆/切換打勾狀態
// 艾草的寫法是藉由點擊事件改變todoData的資料，然後再重新渲染畫面
// 自己以往的寫法都是直接改變畫面狀態只有到submit才會變動資料面

//監聽註冊 ul todoList 的點擊事件
todoList.addEventListener('click', (e) => {
    //透過e.target直指事件本身(而非父層)
    //透過 closest 的方式能找出點擊到的 li 標籤
    //透過 dataset.id 取出埋在該 li 內的 id
    //取出來的 id 會是字串型別記得幫它轉型成數字型別
    let id = parseInt(e.target.closest('li').dataset.id)
    //刪除功能
    //透過 nodeName 確認是否為 A 連結 (nodeName:該節點tag回傳 ex: div & body 等)
    if (e.target.nodeName === 'A') {
        e.preventDefault() //取消 a 標籤預設行為
        //透過陣法方法 findIndex 比對 todoData 內的 id 是否等於點擊到的 id
        let index = todoData.findIndex((item) => item.id === id)
        //如果是的話刪除該筆資料
        //array.splice(起始位置,刪除數量,添加內容)
        todoData.splice(index, 1)
    } else {
        //切換打勾功能
        //透過 todoData 去跑 forEach
        todoData.forEach((item) => {
        //如果 todoData 內的 id 是否等於點擊到的 id
            if (item.id === id) {
                //更改資料是否狀態
                item.complete ? (item.complete = false) : (item.complete = true)
            }
        })
    }
    //重新渲染
    render(todoData)
})

//切換 tab
//透過 querySelector 選取 id tab
const tab = document.querySelector('#tab')

//預設顯示狀態為全部
let status = 'all'

//註冊監聽是否點擊到 tab
tab.addEventListener('click', changeTab)
//點擊到 tab 就執行 changeTab(e)
function changeTab(e) {
    //透過 e.target 將 dataset 埋入的 tab 取出
    status = e.target.dataset.tab
    //透過 querySelectorAll 選取 tab 標籤底下的 li
    let tabs = document.querySelectorAll('#tab li') //類陣列
    //點擊時 tab 先清掉全部 class 樣式
    tabs.forEach((item) => {
    //先移除全部的 class active 樣式
        item.setAttribute('class', '')
    })
    //有被點擊到的才加 class 樣式
    e.target.setAttribute('class', 'active')
    //切換頁面重新渲染
    updateList()
}

//修改完成狀態
function updateList() {
    //切換不同頁面顯示資料
    let showData = []
    //跟切換 tab 的 status 整合
    if (status === 'all') {
    //狀態為全部 "all" 時就全部顯示
        showData = todoData
    //狀態為待完成 "work" 時
    } else if (status === 'work') {
    //篩選出未完成
        showData = todoData.filter((item) => !item.complete)
    } else {
    //篩選出已完成
        showData = todoData.filter((item) => item.complete)
    }
    //計算幾個待完成項目 (左下角)
    const workNum = document.querySelector('#workNum')
    //篩選出未完成的長度
    let todoLength = todoData.filter((item) => !item.complete)
    //並將長度賦予到該 DOM 節點上
    workNum.textContent = todoLength.length
    //渲染 showData
    render(showData)
}
updateList() //初始化頁面


// 清除已完成項目
// 透過 querySelector 選取 id 為 deleteBTN 的 DOM
const deleteBTN = document.querySelector('#deleteBtn')
// 註冊監聽 deleteBTN 的點擊事件
deleteBTN.addEventListener('click', function (e) {
    //取消預設效果
    e.preventDefault()
    //重新將 todoData 賦予未完成的資料
    todoData = todoData.filter((item) => !item.complete)
    //重新渲染 updateList()
    updateList()
})
//點擊 Enter 也可以新增資料
//註冊監聽 inputVal 的鍵盤 "keyup" 事件
inputVal.addEventListener('keyup', function (e) {
    //如果點擊到 "Enter"
    // if (e.keycode === 13) {
    if (e.key === 'Enter') {
    //執行新增該筆資料
        addTodo()
    }
})