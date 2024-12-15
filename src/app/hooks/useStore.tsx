import { create } from 'zustand'
interface State{
    ready:boolean;
    isReady: () => void;
}

//  It is basically a function which does not return a value 

export const useStore = create<State>((set) => ({
 ready:false,
 isReady:()=> set({ready:true}),
}))
