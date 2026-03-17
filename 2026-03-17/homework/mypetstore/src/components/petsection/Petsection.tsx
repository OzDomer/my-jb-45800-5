import "./Petsection.css"
import Petcard from "../petcard/Petcard"

export default function Petsection({ pets }: { pets: { picture: string, name: string }[] }) {
    return (
        <div className="Petsection">
            {pets.map((pet, index) => <Petcard key={index}
                picture={pet.picture}
                name={pet.name}
            />)}
        </div>
    )
}