import { useState ,useEffect} from "react";
import Link from "next/link";

import KKeyword from "@/components/KKeyword";

function Home(){

    const [clicked, setClicked] = useState("");
    const [newsData, setNewsData] = useState([]);


                useEffect(() => {
                const fetchData = async () => {
                    try {
                        
                        const response = await (await fetch(`http://songssam.site:8080/api/keyword?mode=0&sid1=101`,
                            {
                            method: "GET",
                            }
                        )).json();
                        setNewsData(response.response);
                    } catch (err) {
                        console.error('API 요청 실패:', err);
                    }
                    };
                    fetchData();
                }, []);


    return (
        <>
           <KKeyword   data = {Object.values(newsData)}/>
        
    
        </>
    )
}



export default Home;


