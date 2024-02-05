import React, { useState } from "react";
import { Block } from "../styles";
import EditModal from "../../Modal";
import { MixedInterface } from "../../../data/interface";

interface BlockItemInterfacePrice {
  item: MixedInterface;
  columns: number;
  content: any;
}

const BlockItem = ({ item, columns, content }: BlockItemInterfacePrice) => {
    
    
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Block header={false} columns={columns}>
        {Array(Object.values(item)).map((pr: any) =>
          pr.map((p: any, index: number) =>
            typeof p == "boolean" ? (
              <div className="block" key={index}>
                {p === true ? "Active" : "Inactive"}
              </div>
            ) : (
              <div className="block" key={p}>
                {p}
              </div>
            )
          )
        )}
        <div className="block">
          <button onClick={() => setIsModalVisible(!isModalVisible)}>
            Edit
          </button>
        </div>
        {isModalVisible && (
          <EditModal close={setIsModalVisible} item={item} content={content} />
        )}
      </Block>
    </>
  );
};

export default BlockItem;
