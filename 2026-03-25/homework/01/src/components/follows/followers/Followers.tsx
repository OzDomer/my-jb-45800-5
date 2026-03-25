import './Followers.css'
import type UserModel from '../../../models/User'
import { useEffect, useState } from "react"
import followersService from "../../../services/follower"
import Follow from "../follow/follow"

export default function Followers() {
  const [followers, setFollowers] = useState<UserModel[]>([])

  useEffect(() => {
    (async () => {
      try {
        const followersList = await followersService.getFollowers()
        setFollowers(followersList)
      } catch (e) {
        alert(e)
      }
    })()
  }, [])
  return (
    <div className="Follow">
      {followers.map(user => <Follow key={user.id} user={user} />)}
    </div>
  )
}