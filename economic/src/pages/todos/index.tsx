import { proxy, useSnapshot } from 'valtio'

type Status = 'pending' | 'completed'
type Filter = Status | 'all'
type Todo = {
  description: string
  status: Status
  id: number
}

export const store = proxy<{ filter: Filter; todos: Todo[] }>({
  filter: 'all',
  todos: [],
})

const Indexs = () => {
    const snap = useSnapshot(store)
    return (
        <ul>
        {snap.todos
            .filter(({ status }) => status === snap.filter || snap.filter === 'all')
            .map(({ description, status, id }) => {
            return (
                <li key={id}>
                <span data-status={status} className="description">
                    {description}
                </span>
                <button className="remove">x</button>
                </li>
            )
            })}
        </ul>
    )
}

  export default Indexs;