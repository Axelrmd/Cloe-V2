
import { useParams } from "react-router";
import fetes from "../data/feteDuJour.json";


export function FetesMois() {
    let { mois } = useParams();

    if (!mois) {
        return <text>Mois invalide ou non trouvé !</text>;
    }

    const fetesMois = fetes[parseInt(mois)]

    return (
        <view className='fetesDuMois'>
            <scroll-view scroll-orientation="vertical">
                {fetesMois.map((item, index) => (
                    <view className="fetesMois">
                        <text className="jour">{index + 1}</text>
                        <text className="fete">{item[0]}</text>
                    </view>
                ))}
            </scroll-view>
        </view>
    )
}