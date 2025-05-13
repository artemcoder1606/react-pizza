import React from 'react'

export const Categories = ({categoryIndex, setCategoryIndex}) => {

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
    <ul>
      {categories.map((cat, index) =>  <li onClick={()=>setCategoryIndex(index)} className={index === categoryIndex?'active':''} key={cat}>{cat}</li>)}
    </ul>
  </div>
  )
}

