
//영화의 정보가 가져와지는 기능이 실행된다고 직관적으로 알수있게
//함수로 만들어 사용하는 것이 좋다
//함수에서 사용되는 자원을 외부에 노출하지 않을 수 있다.
//함수를 재활용할 수 있다.

function fetchMovies(title){
    const OMDB_API_KEY = '7035c60c'
    return new Promise(async(resolve,reject)=>{
        try{
            const res = await axios.get(`https://omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}`)
            resolve(res);
        }catch(error){
            console.log(error)
            reject('erororo')
        }
    })
}

async function test(){
    try{
        const res = await fetchMovies('frozen')
        console.log(res)
    }catch(error){
        console.log(error);
    }       
}

function MethodTest(){
    fetchMovies('time')
    .then((resp)=>{console.log(resp)})
    .catch((error)=>{console.log(error)})
}

test();
MethodTest();

