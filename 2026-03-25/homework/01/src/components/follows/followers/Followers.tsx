import './Followers.css'
import type UserModel from '../../../models/User'
import { useEffect, useState } from "react"
import followingService from "../../../services/following"
import Follow from "../follow/follow"

export default function Followers() {
  const [following, setFollowing] = useState<UserModel[]>([])

  useEffect(() => {
    (async () => {
      try {
        const followingList = await followingService.getFollowing()
        setFollowing(followingList)
      } catch (e) {
        alert(e)
      }
    })()
  }, [])
  return (
    <div className="Follow">
      {following.map(user => <Follow key={user.id} user={user} />)}
    </div>
  )
}