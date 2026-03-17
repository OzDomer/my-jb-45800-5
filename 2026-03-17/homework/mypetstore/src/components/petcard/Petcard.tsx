import "./Petcard.css"
export default function Petcard({ picture, name }: { picture: string, name: string }) {
    return (
        <div className="Petcard">
            <img src={picture} />
            <p>{name}</p>
        </div>
    )
}