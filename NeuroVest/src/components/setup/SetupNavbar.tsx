import { useState, useEffect } from "react";

// STAGES
import { stage_1_title } from "./stages/Stage_1";
import { stage_2_title } from "./stages/Stage_2";
import { stage_3_title } from "./stages/Stage_3";
import { stage_4_title } from "./stages/Stage_4";
import { stage_5_title } from "./stages/Stage_5";
import { stage_6_title } from "./stages/Stage_6";
import { stage_7_title } from "./stages/Stage_7";
import { stage_8_title } from "./stages/Stage_8";
import { stage_9_title } from "./stages/Stage_9";
import { stage_10_title } from "./stages/Stage_10";


// STORES
import { useStageProgress } from "@/stores";
import useTermsCheckbox from "@/stores/useTermsCheckbox";

export default function SetupNavbar() {

  // Set stageTitle based on the progress-bar stored counter
  const { stage } = useStageProgress();

  const [currentStage, setCurrentStage] = useState<string>('');
  const [nextStage, setNextStage] = useState<number>(10);

  // Check on 'Terms of Use' Checkbox 
  const { setIsAccepted } = useTermsCheckbox();


  // Sorting the stages:
  useEffect(() => {

    switch (true) {
      case stage == 10:
        setIsAccepted(false)
        setCurrentStage(stage_1_title)
        setNextStage(20)
        break;
      case stage == 20:
        setIsAccepted(false)
        setCurrentStage(stage_2_title)
        setNextStage(30)
        break;
      case stage == 30:
        setCurrentStage(stage_3_title)
        setNextStage(40)
        break;
      case stage == 40:
        setCurrentStage(stage_4_title)
        setNextStage(50)
        break;
      case stage == 50:
        setCurrentStage(stage_5_title)
        setNextStage(60)
        break;
      case stage == 60:
        setCurrentStage(stage_6_title)
        setNextStage(70)
        break;
      case stage == 70:
        setCurrentStage(stage_7_title)
        setNextStage(80)
        break;
      case stage == 80:
        setCurrentStage(stage_8_title)
        setNextStage(90)
        break;
      case stage == 90:
        setCurrentStage(stage_9_title)
        setNextStage(100)
        break;
      case stage == 100:
        setCurrentStage(stage_10_title)
        setNextStage(110)
        break;
      default:
        break;
    }


  }, [stage, setIsAccepted]);


  return (
    <div className="flex justify-between py-2 px-4 rounded-tl-lg rounded-tr-lg bg-white text-md border-b-[1px]">
      <div className="font-normal sm:block hidden w-1/3">Account Setup</div>
      <div className={`font-bold ${nextStage > 100 ? 'md:text-end' : 'md:text-center'} text-start sm:w-1/3 w-full`}>{currentStage}</div>
      {nextStage < 110 && (
        <div className="font-normal text-[gray] text-end w-1/3 md:block hidden">
          {
            nextStage === 10 && (stage_1_title) ||
            nextStage === 20 && (stage_2_title) ||
            nextStage === 30 && (stage_3_title) ||
            nextStage === 40 && (stage_4_title) ||
            nextStage === 50 && (stage_5_title) ||
            nextStage === 60 && (stage_6_title) ||
            nextStage === 70 && (stage_7_title) ||
            nextStage === 80 && (stage_8_title) ||
            nextStage === 90 && (stage_9_title) ||
            nextStage === 100 && (stage_10_title)

          }
        </div>
      )}
    </div>
  )
}
