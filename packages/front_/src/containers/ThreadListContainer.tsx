import ThreadList from "../components/organisms/ThreadList"

export interface ThreadListContainerProps {
  query?: string
  page?: number
}
const ThreadListContainer: React.FC<ThreadListContainerProps> = ({ query, page }) => {
  const threadList = [
    {
      id: 1,
      name: "thread1",
      post_count: 0,
    },
    {
      id: 2,
      name: "thread2",
      post_count: 0,
    }
  ]

  console.log(query, page)
  return <ThreadList threads={ threadList } />
}

export default ThreadListContainer
