import { useEffect, useState } from "react";

// STORES
import { useStageProgress } from "@/stores"
import useTermsCheckbox from "@/stores/useTermsCheckbox";

// UI
import { Progress } from "@/components/ui/progress"
import { Button } from "../ui/button";


export default function SetupFooter() {

  // Progress bad controllers
  const { stage, increaseProgress, decreaseProgress } = useStageProgress();

  // Checkbox state of 'Terms of Use, Stage_2' 
  const { isAccepted } = useTermsCheckbox();

  // Update the NEXT-btn accourdingly to the 'isAccepted' Checkbox State
  const [nextBtnState, setNextBtnState] = useState<boolean>()

  useEffect(() => {
    setNextBtnState(isAccepted)
    console.log('btn state change')
  }, [isAccepted])



  return (
    <div className="flex justify-between items-center text-center py-2 px-4 rounded-bl-lg rounded-br-lg  bg-white text-sm border-t-[1px]">
      <Button disabled={stage <= 10 && true} className="capitalize bg-[#424242] hover:bg-[#696969] shadow-md border-none text-white py-2 px-6 font-bold rounded-lg cursor-pointer disabled" onClick={() => decreaseProgress(stage)}
      >back</Button>

      <Progress value={stage < 10 ? 10 : stage} className="w-[60%] bg-slate-100 mx-4 sm:block hidden" />

      <Button disabled={stage > 99 && true || nextBtnState} className="capitalize bg-primary-blue hover:bg-primary-lightblue shadow-md border-none text-white py-2 px-6 font-bold rounded-lg cursor-pointer" onClick={() => increaseProgress(stage)}
      >next</Button>
    </div>
  )
}
