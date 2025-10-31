declare module "@marsidev/react-turnstile" {
  import type {
    ForwardRefExoticComponent,
    HTMLAttributes,
    RefAttributes,
  } from "react"

  export interface TurnstileProps extends HTMLAttributes<HTMLDivElement> {
    siteKey: string
    onSuccess?: (token: string) => void
    onExpire?: () => void
    onError?: (errorCode?: string) => void
    options?: Record<string, unknown>
  }

  export type TurnstileInstance = {
    reset: () => void
  }

  export const Turnstile: ForwardRefExoticComponent<
    TurnstileProps & RefAttributes<TurnstileInstance | undefined>
  >
}

