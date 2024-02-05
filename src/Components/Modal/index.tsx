import React, {Dispatch, SetStateAction, useState} from "react";
import {PopUpCloseBtn, PopUpContainer, PopUpContent, PopUpFooterWrapper, PopUpHeader, PopUpStage} from "./styles";

interface EditModal {
    close: Dispatch<SetStateAction<boolean>>,
    content: any,
    item: any
}

const EditModal = ({close, content, item}: EditModal) => {
    let editableField = item?.name || item?.description || item?.title;
    let title = item?.name ? 'name' : item?.description ? 'description' : 'title';
    const [value, setValue] = useState('');
    const changeName = () => {
        content.map((c: any) => {
            
            if(c.id === item.id){
                item[title] = value;
            }
        })
        close(false);
    }

    return(
        <PopUpContainer >
            <PopUpStage>
                <PopUpHeader>
                    <div>
                        <h3>Edit</h3>
                    </div>
                    <PopUpCloseBtn >
                        <div onClick={() => close(false)}></div>
                    </PopUpCloseBtn>
                </PopUpHeader>
                <PopUpContent>
                    <h4>Name</h4>
                    <input type="text" defaultValue={editableField} onChange={(e) => setValue(e.target.value)}/>
                </PopUpContent>
                <PopUpFooterWrapper>
                    <div>
                        <button onClick={changeName}>Save</button>
                    </div>
                </PopUpFooterWrapper>
            </PopUpStage>
        </PopUpContainer>
    )
}

export default EditModal;