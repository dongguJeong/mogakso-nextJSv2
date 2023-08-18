
export async function fetchData(keyword : string | undefined) {
    try{
        const res =  await(await fetch(`http://songssam.site:8080/api/search?keyword=${keyword}`,
            {
                method : 'GET',
            }))
            .json();
        
            return (res.response);
        }catch(err){
         console.log(err);
    
    }
};

export async function fetchKeyword(mode : number) {
    try {
               
        const response = await (await fetch(`http://songssam.site:8080/api/keyword?mode=0&sid1=${mode}`,
            {
              method: "GET",
            }
          )).json();
        return (response.response);
    } catch (err) {
        console.error('API 요청 실패:', err);
    }
};



export interface IPop{
    summary : string;
    title : string;
    origin : string;
}

export interface INews{
    originUrl : string ;
    title : string;
    press : string;
    imgUrl : string;
    summary : string;
    desc : string;
}


export interface ContentsProps extends INews{
    word : string
    data : INews[];
  }