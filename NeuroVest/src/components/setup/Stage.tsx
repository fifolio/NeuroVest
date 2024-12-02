import { useState, useEffect } from "react";

// STORES
import { useStageProgress } from "@/stores";

// STAGES
import Stage_1 from "./stages/Stage_1";
import Stage_2 from "./stages/Stage_2";
import Stage_3 from "./stages/Stage_3";
import Stage_4 from "./stages/Stage_4";
import Stage_5 from "./stages/Stage_5";
import Stage_6 from "./stages/Stage_6";
import Stage_7 from "./stages/Stage_7";
import Stage_8 from "./stages/Stage_8";
import Stage_9 from "./stages/Stage_9";
import Stage_10 from "./stages/Stage_10";


export default function Stage() {

  // Set stage based on the progress-bar stored counter
  const { stage } = useStageProgress();
  const [currentStage, setCurrentStage] = useState<string>('');

  // Sorting the stages:
  useEffect(() => {

    switch (true) {
      case stage == 10:
        setCurrentStage('stage_1')
        break;
      case stage == 20:
        setCurrentStage('stage_2')
        break;
      case stage == 30:
        setCurrentStage('stage_3')
        break;
      case stage == 40:
        setCurrentStage('stage_4')
        break;
      case stage == 50:
        setCurrentStage('stage_5')
        break;
      case stage == 60:
        setCurrentStage('stage_6')
        break;
      case stage == 70:
        setCurrentStage('stage_7')
        break;
      case stage == 80:
        setCurrentStage('stage_8')
        break;
      case stage == 90:
        setCurrentStage('stage_9')
        break;
      case stage == 100:
        setCurrentStage('stage_10')
        break;
      default:
        break;
    }

  }, [stage]);

  return (
    <div className="sm:min-h-[75vh] h-[70vh]">
      {
        currentStage === 'stage_1' && (<Stage_1 />) ||
        currentStage === 'stage_2' && (<Stage_2 />) ||
        currentStage === 'stage_3' && (<Stage_3 />) ||
        currentStage === 'stage_4' && (<Stage_4 />) ||
        currentStage === 'stage_5' && (<Stage_5 />) ||
        currentStage === 'stage_6' && (<Stage_6 />) ||
        currentStage === 'stage_7' && (<Stage_7 />) ||
        currentStage === 'stage_8' && (<Stage_8 />) ||
        currentStage === 'stage_9' && (<Stage_9 />) ||
        currentStage === 'stage_10' && (<Stage_10 />)
      }
    </div>
  )
}

