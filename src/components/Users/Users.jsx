import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/userPhoto.png"


class Users extends React.Component {

componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        this.props.setUsers(response.data.items)
    })
}
    render() {
        return <div>
            {this.props.users.map(u =>
                <div key={u.id}>}
                    <img className={style.userAvatar} src={u.photos.small != null ? u.photos.small : userPhoto}
                         alt={""}/>
                    <div>{u.name}</div>
                    <div>{u.status}</div>

                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </div>)
            }
        </div>
    }
}


/* пример запроса с сервера
[
    {
        id: 1,
        name: "Dima",
        followed: false,
        status: "I'am King",
        country: "Russia",
        city: "Moscow",
        imgUrl: "https://i.pinimg.com/474x/d7/93/f7/d793f74bd7c7ce93405f3b221897e717.jpg"
    },
    {
        id: 2,
        name: "Sasha",
        followed: true,
        status: "I'am Kinggggggg",
        country: "Russia",
        city: "Moscow",
        imgUrl: "https://i.pinimg.com/474x/d7/93/f7/d793f74bd7c7ce93405f3b221897e717.jpg"
    },
    {
        id: 3,
        name: "Dima",
        followed: true,
        status: "I'am King",
        country: "Russia",
        city: "Moscow",
        imgUrl: "https://i.pinimg.com/474x/d7/93/f7/d793f74bd7c7ce93405f3b221897e717.jpg"
    }]
*/
export default Users;