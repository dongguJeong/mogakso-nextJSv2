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
            setNoShow(cur => false);
        }
        

        else{
            const timeOutId = setTimeout(() => {
                setNoShow(true);
            },5000)
            console.log('불러오지 못했습니다');
            return ()=> {
                clearTimeout(timeOutId)
            }
        }

            
        
    },[query.data]);

    

    return(
        <div> 

            { query.isLoading ? (<div className="w-full h-full flex justify-center items-center text-lg font-bold">isLoading</div>)

                 : noShow ? <div className="w-full h-full flex justify-center items-center text-lg font-bold">해당 키워드에 대한 뉴스가 없습니다</div>  : <News word = {keyword} data = {news}></News>
            }

        </div> 
    )
}

export default Keyword;

