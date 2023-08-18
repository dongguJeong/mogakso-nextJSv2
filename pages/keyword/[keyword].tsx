import News from "@/components/News";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import {fetchData} from "../api/fetch";
import { INews } from "../api/fetch";
import Link from "next/link";

function Keyword(){

    const [news,setNews] = useState<INews[]>([]);    
    const [noShow, setNoShow] = useState(false);
    
    const router =useRouter();
    const keyword = router?.query?.keyword as string;
    const mode = router.query.mode === undefined ? String(101) : router.query.mode;

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


    const [newsData, setNewsData] = useState<string[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
               
                const response = await (await fetch(`http://songssam.site:8080/api/keyword?mode=0&sid1=${mode}`,
                    {
                      method: "GET",
                    }
                  )).json();
                  const keywords : string[] =Object.values(response.response as string[]);
                setNewsData(keywords);
            } catch (err) {
                console.error('API 요청 실패:', err);
            }
        };
        fetchData();
    }, [mode]);

    

    return(
        <div > 

            { query.isLoading ? (<div className="w-full h-full flex justify-center items-center text-lg font-bold">isLoading</div>)

                 : noShow ? <div className="w-full h-full flex justify-center items-center text-lg font-bold">기사를 요약하는 중입니다. (예상 소요시간 2분 30초)</div>  
                 : (<div className="w-full min-h-screen flex">
                        <News word = {keyword} data = {news}/>

                        
                    </div> )
            }

        </div> 
    )
}

export default Keyword;

