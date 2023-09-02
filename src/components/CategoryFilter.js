import React, { useState } from "react";

function CategoryFilter( { categories, catego, handleCate } ) {
  const [ select, setSelect] = useState("select")

    
  function handleClass(event){
    const category = event.target.value
    handleCate(category)
    setSelect(()=> "selected")
  }

  const buttons = categories.map(cate => <button key={cate} onClick={handleClass} className={catego === cate ?select : null} value={cate}>{cate}</button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
