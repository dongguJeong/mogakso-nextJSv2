import News from "@/components/News";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import {fetchData} from "../api/fetch";
import { INews } from "../api/fetch";


function Keyword(){

    const [news,setNews] = useState<INews[]>([]);    
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
        }

        else{
            console.log('불러오지 못했습니다');
        }
        
    },[query.data]);


    return(
        <div> 

            { query.isLoading ? <div className="w-full h-full flex justify-center items-center text-lg font-bold">isLoading</div>

                 : <News word = {keyword} data = {news}></News>
            }

        </div> 
    )
}

export default Keyword;

