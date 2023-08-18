import { useState } from "react";
import { ContentsProps } from "@/pages/api/fetch";
import { IPop } from "@/pages/api/fetch";
import { INews } from "@/pages/api/fetch";

const News  = ({word,data } : ContentsProps) => {
    

    const [pop, setPop] = useState(false);
    
    const [popNews, setPopNews] = useState<INews>();
    

    const handleClick = (title : string) => {
        setPop((cur) => true);
        const selected = data.find((i) => i.title === title);
        setPopNews(selected);

    }
    
    const removeHtmlTags = (input: string) => {
        // Remove <b> tags
        const withoutBTags = input.replace(/<\/?b>/g, '');
    
        // Replace &apos; with '
        const withoutApos = withoutBTags.replace(/&apos;/g, "'");

        // Replace &quot; with '
        const withoutQuot = withoutApos.replace(/&quot;/g, "'");
    
        return withoutQuot;
    };

    return(
        <>

        
            <div className="w-[650px] m-auto h-60 bg-white rounded-lg font-extrabold text-5xl flex justify-center 
                            items-center border-2 border-solid border-[#394867] underline underline-offset-8 cursor-pointer">
                <span>{word}</span>
            </div>

            <div className="flex flex-col space-y-5 text-3xl w-[650px] m-auto items-center mt-16">
                {data.map((news: INews,index : number) => 
                    <div key={index} className="flex bg-white w-full rounded-lg py-4 px-4 border-2 border-solid border-[#394867] items-center "> 
                        <img className="w-48 h-48  rounded-md mr-10" src={news.imgUrl} /> 
                        <div className="pt-8 hover:underline underline-offset-4 cursor-pointer" onClick={() =>handleClick(news.title)}>
                            <div className="mb-8 text-lg">{removeHtmlTags(news.title)}</div>
                            <div className="mb-8 text-sm">{news.desc}</div>
                            <div className="text-sm mt-8">{news.press}</div>
                            
                        </div>
                        
                    </div>
                    
                    )}

            </div>


            {
                pop && 
                
                <div className="w-[48rem] h-96 bg-white fixed top-40 left-[22rem] rounded-lg overflow-scroll py-2 px-2 border border-solid">
                    
                    <div className="w-full flex flex-row-reverse ">
                        <div className="bg-slate-200 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer "
                            onClick={()=> setPop(cur => false)}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="1rem" 
                                viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                            </svg>
                        </div>
                    
                    </div>
                    <div>
                        <div className="text-center border-b-2 border-slate-300 border-solid pb-5 font-bold text-lg">
                            <span>{popNews?.title}</span>
                        </div>
                        <div className="px-10 py-5">
                            <div className="mb-8">
                                <span className="text-lg ">{popNews?.summary}</span>
                            </div>
                            <br/>
                            <a href={popNews?.originUrl} className="cursor-pointer text-blue-400">{popNews?.originUrl}</a>

                        
                        </div>
                    </div>

                </div> 
            }

        </>
    )

}

export default News;
