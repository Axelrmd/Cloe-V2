
import { useNavigate } from "react-router";


export function Mois() {
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const nav = useNavigate();

    return (
        <view className='mois'>
            {months.map((item, index) => (
                <view bindtap={() => nav(`/mois/${index}`)}>
                    <text>{item}</text>
                </view>
            ))}
        </view>
    )
}