
import fetes from "../data/feteDuJour.json";


export function Passees() {
    const today = new Date();
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    const fetesPassees = [];

    for (let i = 0; i < today.getMonth() + 1; i++) {
        if (i == today.getMonth()) {
            for (let j = 0; j < day; j++) {
                fetesPassees.push({ "jour": `${j + 1} ${months[i]}`, "fete": fetes[i][j][0] });
            }
        }else{
            for(let j = 0; j < fetes[i].length; j++){
                fetesPassees.push({ "jour": `${j + 1} ${months[i]}`, "fete": fetes[i][j][0] });
            }
        }
    }

    return (
        <view className='listeFetesPassees'>
            <scroll-view
                scroll-orientation="vertical"
            >
                {fetesPassees.map((item, index) => (
                    <view className="fetesPassees">
                        <text className="jour">{item.jour}</text>
                        <text className="fete">{item.fete}</text>
                    </view>
                ))}
            </scroll-view>
        </view>
    )
}