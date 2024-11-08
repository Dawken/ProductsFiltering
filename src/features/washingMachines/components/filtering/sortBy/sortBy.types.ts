import { SortOption } from '../../../../../types/filtering/sortByType'

type HookProps = {
    setSortOption: (data: SortOption) => void
}

type Props = HookProps & {
    sortOption: SortOption | 'wszystkie'
}

export type { HookProps, Props }
