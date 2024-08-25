import React from 'react'
const skillColors = {
    js:'#f0dc55',
    html: '#f16a30',
    css: '#306af1',
    react: '#66dbfb',
    wordpress: '#28799e',
    node: '#6a9f66',
    mongo: '#57ae52',
    mysql: '#004e6e'
}
function SkillContainer({children, skill='js'}) {
  return (
    <div className={`transition-all hover:scale-125`} style={{color: skillColors[skill]}} >{children}</div>
  )
}

export default SkillContainer