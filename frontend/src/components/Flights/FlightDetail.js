
import { useNavigate } from "react-router-dom";

const FlightDetail = (props)=>{
    const navigate=useNavigate()
    const handleSubmit=()=>{
        navigate(`/flights/one?id=${props.data.flight_id}&p=${props.eld}&t=${props.type}`)
    }
    return(
    <div className="hover:border-sky-600 shadow-md hover:border-2 rounded mt-2 mr-2 ml-4 w-[905px]">


    <div className="w-[900px] h-[125px]  bg-zinc-50   flex flex-row gap-x-10 place-content-evenly">
        
        <div className="h-[125px] w-[150px] mt-3 p-3 pt-4  flex flex-col gap-y-2">
            <img src={props.data.image} className="h-[3rem] w-[3rem] border-2 border-black"/>
                
            
            <p className="text-xs font-semibold">{props.data.flight_name+' | '+props.data.flight_id}</p>

        </div>

        <div className="flex flex-row gap-x-1">

            <div className="h-[125px] w-[100px]  flex justify-center items-center flex-col ">

                <div className="text-sm text-gray-600">{props.data.from}</div>
                <div className="text-xl font-bold">{props.data.dept_time}</div>
            </div>
                
            <div className="h-[125px] w-[100px]  flex flex-col justify-center items-center">
                <div className="text-gray-600 text-xs">{props.data.duration}</div>
                <div className="w-[50px] border-2 border-dashed border-gray-500"></div>
                <div className="text-gray-600 text-xs">Non stop</div>
            </div>
            <div className="h-[125px] w-[100px]  flex flex-col justify-center items-center">
                <div className="text-gray-600 text-sm">{props.data.to}</div>
                <div className="text-xl font-bold">{props.data.arr_time}</div>
            </div>

        </div>

        <div className="h-[125px] w-[250px]  flex flex-col justify-center items-end p-2">
            <div className="text-2xl font-semibold text-black">&#8377;{(props.type==='Business')?props.data.busiprice:(props.type==='Premium Economy')?props.data.premprice:props.data.price}</div>
            <div className="text-right text-xs text-green-700 font-bold"> </div>
        </div>
        
        <div className="flex flex-row justify-center items-center w-[128px] ">
            <button onClick={()=>handleSubmit()} className="flex justify-center items-center h-[40px] w-[90px] rounded bg-orange-500 text-white font-bold">Book</button>
        </div>
    </div >
</div>
       
    )
}

export default FlightDetail;