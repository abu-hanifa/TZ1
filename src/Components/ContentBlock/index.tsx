import React from "react";
import {Block} from "./styles";
import BlockItem from "./BlockItem";

const ContentBlock = ({content}: any) => {
    const columns = Object.values(content[0]).length + 1;

    return (
        <div>
            <Block header={true} columns={columns}>
                {Object.keys(content[0]).map((pr: any) => <div className="block" key={pr}><b>{pr.toUpperCase()}</b></div>)}
            </Block>

            {content.length > 0 && content.map((item: any) =>
               <BlockItem item={item} columns={columns} content={content} />
            )}

        </div>
    )
}

export default ContentBlock;