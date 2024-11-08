type HookProps = {
    setCapacity: (data: string) => void
}

type Props = HookProps & {
    capacity: string
}

export type { HookProps, Props }
