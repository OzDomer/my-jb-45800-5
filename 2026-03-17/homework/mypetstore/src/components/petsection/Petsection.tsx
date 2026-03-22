import "./Petsection.css"
import Petcard from "../petcard/Petcard"

export default function Petsection({ pets, title }: { pets: { picture: string, name: string }[], title: string }) {
    return (
        <div className="Petsection-wrapper">
            <span className="Petsection-title">{title}</span>
            <div className="Petsection">
                {pets.map((pet, index) => <Petcard key={index}
                    picture={pet.picture}
                    name={pet.name}
                />)}
            </div>
        </div>
    )
}