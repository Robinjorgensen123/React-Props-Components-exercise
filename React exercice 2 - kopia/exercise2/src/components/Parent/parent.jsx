/*Övning 3*/
import ProfileCard from "../profilecard/profilecard"
 function Parent() {
 const user = {
    name: 'Nicodemus Naveltuta',
    age: '47',
    title: 'vice ninja',
    email: 'nicokick@theoffice.net'
}
    return <ProfileCard user={user}/>

}

export default Parent