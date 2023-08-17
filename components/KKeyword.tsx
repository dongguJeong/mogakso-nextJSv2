import Link from "next/link";
import { useState } from "react";




const KKeyword  = ( props : any) => {
    
    const {data} = props;
    
    const [pop, setPop] = useState(false);

    const handleClick = (title : string) => {
        setPop((cur) => true);
    }
    
    const startIndex = 2;
    const endIndex = 10;
    const selectedKeyword = Object.values(data).slice(startIndex,endIndex);
    

    return(
        <>

        <Link href={`/keyword/${data[1]}`}>
            <div className="w-[650px] m-auto h-60 bg-white rounded-lg font-extrabold text-5xl flex justify-center cursor-pointer
                            items-center border-2 border-solid border-[#394867] hover:underline underline-offset-[10px] focus:outline-none">
                <span>1.{data[1]}</span >
            </div>
        </Link>

        <div className="flex flex-col space-y-5 text-3xl w-[650px] m-auto items-center mt-16">
            {selectedKeyword.map((keyword : any,i : number) => 
                <Link href={`/keyword/${keyword}`} 
                      className="flex bg-white w-full rounded-lg py-4 
                                  px-4 border-2 border-solid border-[#394867] items-center
                                  cursor-pointer hover:underline underline-offset-8 focus:outline-none
                                "
                       key={i}           
                >
                        {i+2}.{keyword}
                </Link>
                )

            }
        </div>


       

</>
    )

}

export default KKeyword;
