import { FitTrackProArticle1, FitTrackProArticle2 } from "./case-study/fitTrackProArticle"

interface props{
    articleId: string
}

const Article = ({articleId}:props) => {
    switch(articleId){
        case "fitTrackPro1": return <FitTrackProArticle1 />
        case "fitTrackPro2": return <FitTrackProArticle2 />

        default: return <h1>Article Id not found</h1>;
    } 
}

export default Article;