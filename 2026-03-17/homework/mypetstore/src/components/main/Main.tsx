import "./Main.css"
import "../petsection/Petsection"
import Petsection from "../petsection/Petsection"
import Banner from "../banner/Banner"
const dogs =
    [{ picture: "https://images.squarespace-cdn.com/content/v1/61ccb17203b2956faba35dce/dacdd013-486b-4095-ba21-34ad4019bd31/Bernese+Mountain+Dogs+Are+cute+as+puppy.jpg", name: "BMD" },
    { picture: "https://geniusvets.s3.amazonaws.com/gv-blog/2023/alaskanmalamutesquare2.jpg", name: "Alaskan malmute" },
    { picture: "https://cdn.britannica.com/85/235885-050-C8CC6D8B/Samoyed-dog-standing-snow.jpg", name: "Samoyed" },
    { picture: "https://www.purina.com/sites/default/files/2025-09/australian-shepherd-3.jpg", name: "Australian shepard" }]
const cats = [
    { picture: "https://placecats.com/300/200", name: "Whiskers" },
    { picture: "https://placecats.com/301/200", name: "Luna" },
    { picture: "https://placecats.com/302/200", name: "Mochi" },
    { picture: "https://placecats.com/312/200", name: "Salem" }
]
export default function Main() {
    return (
        <div className="Main">
            <Petsection pets={dogs} />
            <Petsection pets={cats} />
            <Banner />

        </div>
    )
}