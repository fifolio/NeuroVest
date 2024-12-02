import { create } from 'zustand';

interface useStageProgress {
    stage: number,
    increaseProgress: (prevState: number) => void,
    decreaseProgress: (prevState: number) => void,
}

const useStageProgress = create<useStageProgress>((set) => ({
    stage: 10,
    increaseProgress: () => set((prevState) => ({ stage: prevState.stage + 10 })),
    decreaseProgress: () => set((prevState) => ({ stage: prevState.stage - 10 }))
}));


export default useStageProgress;
