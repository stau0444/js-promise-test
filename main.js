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


asyncAwaitTest();
