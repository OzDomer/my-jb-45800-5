import "./follow.css"
import type UserModel from "../../../models/User"

interface UserProps {
    user: UserModel
}
export default function Follow(props: UserProps) {

    const { name, username } = props.user


    return (
        <div className='Follow'>
            <h3>{name}</h3>
            <h4>{username}</h4>
        </div>
    )
}