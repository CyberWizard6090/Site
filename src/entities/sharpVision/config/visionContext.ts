import { createContext } from 'react'

export enum Vision {
    OPEN = 'open',
    CLOSE = 'close',
}

export interface IVisionContext {
    vision?: Vision
    setVision?: (theme: Vision) => void
}

export const VisionContext = createContext<IVisionContext>({})

export const LOCAL_STORAGE_THEME_KEY = 'vizion'