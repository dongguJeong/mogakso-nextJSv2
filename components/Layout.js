import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


function Layout({children}){

    const route = useRouter();

    const router =useRouter();
    

    const [searchWord, setSearchWord] = useState("");
    const handleOnChange = (e) => {
        
        let value =  e.target.value ;
        
        if(value === " ") {
            return 
        }
        else{
            setSearchWord(e.target.value);
        }
    }

    const handleSubmit = (e) => {
            e.preventDefault();
            route.push(`/keyword/${searchWord}`);
            setSearchWord("");
        }

    return (
        <div className="w-full min-h-screen min-w-[1140px]">  

            <div className="w-full pb-3  h-32 py-4 border-b-2 border-[#212A3E] border-solid">
                <div className="border-b-2">
                    <div className="w-[1140px] m-auto ">
                         <div className="w-full mb-4 pt-2 ">
                            <div className="px-5 flex justify-between">
                                <Link href="/" className=" items-center  flex">
                                    <img src="/imgsrc/keyword.png" className="w-8 h-8 mr-8 "></img>
                                    <span className=" text-2xl"> 
                                        Keyword
                                    </span>
                                </Link >

                                <form className="w-32 h-8 " onSubmit={handleSubmit}>
                                    <input className="w-full h-full px-3 py-4 border-[#212A3E] border-solid border-2 rounded-lg" 
                                           onChange={handleOnChange} 
                                           value={searchWord}
                                           placeholder="검색"
                                    ></input>
                                </form>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="w-[1140px] m-auto pt-4 text-center">
                        <div className="w-full ">
                            <div className="font-bold grid grid-cols-6 ">
                                <Link className={`focus:outline-none hover:font-bold hover:text-2xl hover:underline underline-offset-8 ${router.query?.category === "경제" ? "underline font-bold text-2xl" : "none"}`} 
                                    href="/">경제</Link>
                                <Link className={`focus:outline-none hover:font-bold hover:text-2xl hover:underline underline-offset-8 ${router.query?.category === "정치" ? "underline font-bold text-2xl" : "none"}`}
                                     href={{ pathname :'/category/[category]', query : {category : '정치' , mode : 100}}}>정치</Link>
                                <Link className={`focus:outline-none hover:font-bold hover:text-2xl hover:underline underline-offset-8 ${router.query?.category === "사회" ? "underline font-bold text-2xl" : "none"}`} 
                                    href={{ pathname :'/category/[category]', query : {category : '사회' , mode : 102}}}>사회</Link>
                                <Link className={`focus:outline-none hover:font-bold hover:text-2xl hover:underline underline-offset-8 ${router.query?.category === "생활문화" ? "underline font-bold text-2xl" : "none"}`} 
                                    href={{ pathname :'/category/[category]', query : {category : '생활문화' , mode : 103}}}>생활/문화</Link>
                                <Link className={`focus:outline-none hover:font-bold hover:text-2xl hover:underline underline-offset-8 ${router.query?.category === "IT과학" ? "underline font-bold text-2xl" : "none"}`} 
                                    href={{ pathname :'/category/[category]', query : {category : 'IT과학' , mode : 105}}}>IT/과학</Link>
                                <Link className={`focus:outline-none hover:font-bold hover:text-2xl hover:underline underline-offset-8 ${router.query?.category === "세계" ? "underline font-bold text-2xl" : "none"}`} 
                                    href={{ pathname :'/category/[category]', query : {category : '세계' , mode : 104}}}>세계</Link>
                            </div>
                        </div>

                    
                </div>
            </div>

            

            <div className="mt-10 w-[1140px] m-auto   pt-10  border-2 border-solid border-[#394867] rounded-xl shadow-xl min-h-screen">
                <div className="pt-10 pb-2 mx-10  ">
                {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;