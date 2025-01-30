

export default function ProfileCard ({ user:  {
    name, title } }) {
return ( 
<div>
    <img src="./nedladdning.jpg" alt="vite" />
    <h1>{name}</h1>
    <p>{title}</p>
    <button>Tryck här</button>
</div>
)
}