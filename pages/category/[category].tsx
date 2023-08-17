import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import KKeyword from '@/components/KKeyword';




function Category() {
    const router = useRouter();
    const search = router.query.category;
    const mode = router.query.mode;

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
               
                const response = await (await fetch(`http://songssam.site:8080/api/keyword?mode=0&sid1=${mode}`,
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
    }, [mode]);

   

    return (
        <div>
           <KKeyword data = {Object.values(newsData)}/>
        </div>
    );
}

export default Category;
