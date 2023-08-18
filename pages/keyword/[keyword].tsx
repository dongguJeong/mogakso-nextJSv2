import News from "@/components/News";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import {fetchData} from "../api/fetch";
import { INews } from "../api/fetch";


function Keyword(){

    const [news,setNews] = useState<INews[]>([]);    
    const [noShow, setNoShow] = useState(false);
    const router =useRouter();
    const keyword = router?.query?.keyword as string;
    console.log(keyword);

    const queryClient= useQueryClient();
    const query = useQuery<INews[]>({queryKey : ["keywords"] , queryFn : ()=>fetchData(keyword) });

    
   


    useEffect(()=> {
        setNews([]);
        query.refetch();

    },[router.query.keyword]);

    useEffect(()=> {
        if(query.data){
            
            setNews(query.data);
            console.log(news);
            setNoShow(cur => false);
           
        }
        

        else{
            const timeOutId = setTimeout(() => {
                setNoShow(true);
            },5000);
            console.log('새로운 키워드 요약 중');
            return ()=> {
                clearTimeout(timeOutId);
                query.refetch();
            }
        }
    },[query.data]);

    

    return(
        <div> 

            { query.isLoading ? (<div className="w-full h-full flex justify-center items-center text-lg font-bold">isLoading</div>)

                 : noShow ? <div className="w-full h-full flex justify-center items-center text-lg font-bold">기사를 요약하는 중입니다. (예상 소요시간 2분 30초)</div>  : <News word = {keyword} data = {news}/>
            }

        </div> 
    )
}

export default Keyword;

