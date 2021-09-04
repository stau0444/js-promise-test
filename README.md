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

>1.Promise.prototype.catch()

프로미스에 거부 핸들러 콜백을 추가하고 호출된 경우 콜백의 반환값 또는 프로미스가 대신 이행된 경우 그 원래 이행값으로 결정하는 새프로미스를 반환한다.

>2.Promise.prototype.finally()

프로미스가 이행되든 거부되는 실행된다.
```js
function a(number){
    return new Promise((resolve ,reject)=>{
        if(number > 4 ){
            //reject();가 실행되면 resolve는 실행되지 않는다.
            reject();
            return 
        }
        setTimeout(()=>{
            console.log('a1');
            console.log('resolve')
            resolve();
        },1000)
    })
}

function PromiseTest(){
    a(7)
    //함수가 resolve 됬을때 실행
    .then(()=>{console.log('resolve')})
    ////함수가 reject 됬을때 실행
    .catch(()=>{console.log('reject')})
    //resolve 든 reject 든 출력된다.
    .finally(()=>{console.log('finally')})
}




asyncAwaitTest();

```
>2.Promise.prototype.then()   

프로미스에 이행 또는 거부 핸들러를 추가하고 호출된 처리기의 반환값 또는 프로미스가 처리되지 않은 경우 그 원래 처리된 값으로 결정하는 새 프로미스를 반환한다

```js
function a(){
//리턴 키워드를 명시해야
//사용하는 곳에서 await 키워드를 쓸 수 있다.
return new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('a1');
        resolve();
    },1000)
})
}
function b(){
//리턴 키워드를 명시해야
//사용하는 곳에서 await 키워드를 쓸 수 있다.
return new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('a2');
        resolve();
    },1000)
})
}
function c(){
//리턴 키워드를 명시해야
//사용하는 곳에서 await 키워드를 쓸 수 있다.
return new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('a3');
        resolve();
    },1000)
})
}
function d(){
//리턴 키워드를 명시해야
//사용하는 곳에서 await 키워드를 쓸 수 있다.
return new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('a4');
        resolve();
    },1000)
})
}

//async await 방식은 ecma2017에 생겼다
//promise 객체는 ecma2015에서 생겼다 .
//promise 에서는 async await 방식과 같은 처리를
//메서드를 통해 지원한다.
async function test(){
a().then(()=>{
    //promise를 반환해서 
    //체이닝 형식으로 call을 사용할 수 있다.
    return b();
})
//중괄호와 리턴 키워드를 지워도 된다.
.then(()=>c())
.then(()=>d())
.then(()=>{console.log('끝')})
}


test();
```

>async await 방식에서 예외처리

```js
async function asyncAwaitTest(){
    //async await 에서는 try catch 문으로 
    //예외를 잡는다.
    try{
        await a(1);
        await a(10);
    }catch(error){
        console.log('reject')
    }finally{
        console.log('done')
    }
}
```



 
