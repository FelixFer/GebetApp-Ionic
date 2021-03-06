import React from "react";


export interface Friend {
    id: string,
    name: string,
    desc: string,
    gender: string,
    photo:string
}
interface Context {
    friends: Friend[];
    addFriend: (id: string, name: string, desc: string, gender: string, photo:string) => void;
    deleteFriend: (id:string) => void;
}

const FriendsContext = React.createContext<Context>({
    friends: [],
    addFriend: () => { },
    deleteFriend: () => { }
});

export default FriendsContext;