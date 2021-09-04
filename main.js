
// 콜백을 통해 a다음에 b가 실행되도록 보장하고 있다.
// 콜백이 많아질수록 안쪽으로 계속 코드가 생겨나며 이를 콜백지옥이라한다.

// function a(cb){
//     setTimeout(()=>{
//             console.log('a')
//             cb()
//     },1000)
// }

// function b(cb){
//     setTimeout(()=>{
//             console.log('b')
//             cb()
//     },1000)
// }



// a(function(){
//     b(function(){
//         console.log('DONE!')
//     })
// })

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
// function b(){
//     console.log('b')
// }

// //비동기 함수
// async function test(){
//     //a에서 resolve가 실행되면 b()로 넘어간다
//     //Promise는 resolve(인수)의 인수를 리턴한다. 
//     const resp = await a()
//     b()
// }

// test()


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

async function test(){
    await a()
    await b()
    await c()
    await d()
    console.log('done')
}

