import React, {useState} from 'react';

const useLoadMore = (DefaultShow, postNumber, data) => {
    const [ postNum, setPostNum] = useState(DefaultShow); 
    const [showLoadBtn, SetShowLoadBtn] = useState(true)
    function handleClick() {
      setPostNum(prevPostNum => prevPostNum + postNumber)
      if(postNum >= data?.length ){
        SetShowLoadBtn(!showLoadBtn)
      }
    }
    return {showLoadBtn, postNum , handleClick}
};

export default useLoadMore;