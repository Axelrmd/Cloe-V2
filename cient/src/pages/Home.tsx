
import fetes from "../data/feteDuJour.json";


export function Home() {
    const today = new Date();
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    const fete = fetes[today.getMonth()][day - 1][0]

    return (
        <view className='feteDuJour'>
            <text className='jour'>{formattedDate}</text>
            <text className='h2'>Fête du jour : </text>
            <text className='fete'>{fete + " " + fete}</text>
        </view>
    )
}