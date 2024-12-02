// STORES
import { useStageProgress } from "@/stores"

// UI
import { Progress } from "@/components/ui/progress"
import { Button } from "../ui/button";


export default function SetupFooter() {

  // Progress bad controllers
  const { stage, increaseProgress, decreaseProgress } = useStageProgress();


  return (
    <div className="flex justify-between items-center text-center py-2 px-4 rounded-bl-lg rounded-br-lg  bg-white text-sm border-t-[1px]">
      <Button disabled={stage <= 10 && true} className="capitalize bg-[#424242] hover:bg-[#696969] shadow-md border-none text-white py-2 px-6 font-bold rounded-lg cursor-pointer disabled" onClick={() => decreaseProgress(stage)}
      >back</Button>

      <Progress value={stage < 10 ? 10 : stage} className="w-[60%] bg-slate-100 mx-4 sm:block hidden" />

      <Button disabled={stage > 99 && true} className="capitalize bg-primary-blue hover:bg-primary-lightblue shadow-md border-none text-white py-2 px-6 font-bold rounded-lg cursor-pointer" onClick={() => increaseProgress(stage)}
      >next</Button>
    </div>
  )
}