import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";




const KKeyword  = ( props : any) => {
    
    const {data} = props;
    const router = useRouter();
    let mode =  router?.query?.mode;
    
    const [pop, setPop] = useState(false);

    const handleClick = (title : string) => {
        setPop((cur) => true);
    }
    
    const startIndex = 1;
    const endIndex = 10;
    const selectedKeyword = Object.values(data).slice(startIndex,endIndex);
    
    
    return(
        <>

        <Link href={`/keyword/${data[0]}`}>
            <div className="w-[600px] m-auto h-52 bg-white rounded-lg font-extrabold text-5xl flex justify-center cursor-pointer
                            items-center border-2 border-solid border-[#394867] hover:underline underline-offset-[10px] focus:outline-none shadow-xl
                            relative
                            ">
                
                <span>1.{data[0]}</span >

                
            </div>
        </Link>

        <div className="grid grid-cols-3 text-3xl h-[150px] m-auto gap-4  mt-16">
            {selectedKeyword.map((keyword : any,i : number) => 
                <Link href={{ pathname : `/keyword/[keyword]` , query : {keyword : keyword , mode : mode} }} 
                      className="flex bg-white w-full rounded-lg py-4  justify-center
                                   border-2 border-solid border-[#394867] items-center
                                  cursor-pointer hover:underline underline-offset-8 focus:outline-none
                                  shadow-xl
                                "
                       key={i}           
                >
                        {i+2}. {keyword}
                </Link>
                )

            }
        </div>


</>
    )

}

export default KKeyword;
