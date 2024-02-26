import AccountManagementSystemArticle from "./case-study/amsArticle"
import { FitTrackProArticle1, FitTrackProArticle2 } from "./case-study/fitTrackProArticle"
import { ImmobiliariaArticle1, ImmobiliariaArticle2 } from "./case-study/immobiliariaArticle"

interface props{
    articleId: string
}

const Article = ({articleId}:props) => {
    switch(articleId){
        case "fitTrackPro1": return <FitTrackProArticle1 />
        case "fitTrackPro2": return <FitTrackProArticle2 />
        case "immobiliaria1": return <ImmobiliariaArticle1 />
        case "immobiliaria2": return <ImmobiliariaArticle2 />
        case "amsArticle1": return <AccountManagementSystemArticle />

        default: return null;
    } 
}

export default Article;