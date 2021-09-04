#
### callback 과 promise
#

```js

// 콜백을 통해 a다음에 b가 실행되도록 보장하고 있다.
// 콜백이 많아질수록 안쪽으로 계속 코드가 생겨나며 이를 콜백지옥이라한다.

function a(cb){
    setTimeout(()=>{
            console.log('a')
            cb()
    },1000)
}

function b(cb){
    setTimeout(()=>{
            console.log('b')
            cb()
    },1000)
}



a(function(){
    b(function(){
        console.log('DONE!')
    })
})

// 위와 같은 문제를 해결하기위해 Promise 객체를 사용한다.

function a(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            console.log('a')
            //resolve가 실행되야 다음 코드로 넘어간다.
            resolve()
        },1000)
    })
}
function b(){
    console.log('b')
}

//비동기 함수
async function test(){
    //a에서 resolve가 실행되면 b()로 넘어간다
    //Promise는 resolve(인수)의 인수를 리턴한다. 
    const resp = await a()
    b()
}

test()


function a(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            console.log('a')
            //resolve가 실행되야 다음 코드로 넘어간다.
            resolve()
        },1000)
    })
}

function b(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            console.log('b')
            //resolve가 실행되야 다음 코드로 넘어간다.
            resolve()
        },1000)
    })
}

function c(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            console.log('c')
            //resolve가 실행되야 다음 코드로 넘어간다.
            resolve()
        },1000)
    })
}

function d(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            console.log('d')
            //resolve가 실행되야 다음 코드로 넘어간다.
            resolve()
        },1000)
    })
}

// 콜백을 훨신 깔끔하게 사용할 수 있다.
async function test(){
    await a()
    await b()
    await c()
    await d()
    console.log('done')
}

```
<br/>

>promise는 아래 3개 중 하나의 상태를 가진다.
- 대기(pending): 이행하거나 거부되지 않은 초기 상태
- 이행(fulfilled) : 연산이 성공적으로 완료된 상태
- 거부(rejected) : 연산이 실패한 상태

    
<br/>

    1.Promise.prototype.catch()

    프로미스에 거부 핸들러 콜백을 추가하고 호출된 경우 콜백의 반환값 또는 프로미스가 대신 이행된 경우 그 원래 이행값으로 결정하는 새프로미스를 반환한다.

    2.Promise.prototype.then()
    프로미스에 이행 또는 거부 핸들러를 추가하고 호출된 처리기의 반환값 또는 프로미스가 처리되지 않은 경우 그 원래 처리된 값으로 결정하는 새 프로미스를 반환한다

    3.Promise.prototype.finally()
    프로미스가 이행되든 거부되는 실행된다.
