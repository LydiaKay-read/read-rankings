// src/RankingTable.tsx
type User = {
  id: number
  firstName: string
  lastName: string
  height: string
  sex: string
}

type Props = {
  users: User[]
}

export default function RankingTable({ users }: Props) {
  return (
    <div className="table-wrap" role="region" aria-label="Read Rankings table">

          <table className="rank-table">
            <caption className="sr-only">List of users and their read rankings</caption>
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Height</th>
                <th scope="col">Sex</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.height}</td>
                  <td>{user.sex}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
  )
}
