import React from "react";
import ContentBlock from "../ContentBlock";

const MainContent = ({content, setContent}: any) => {
    return(
        <div className="main-content">
            <ContentBlock content={content} setContent={setContent} />
        </div>
    )
}

export default MainContent;