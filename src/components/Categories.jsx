import React from 'react'

export const Categories = () => {
  const [categoryActiveIndex, setCategoryActiveIndex] = React.useState(0)

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
    <ul>
      {categories.map((cat, index) =>  <li onClick={()=>setCategoryActiveIndex(index)} className={index === categoryActiveIndex?'active':''} key={cat}>{cat}</li>)}
    </ul>
  </div>
  )
}

