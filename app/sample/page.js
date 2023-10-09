import React from 'react'

export default function page() {
  const html='<p>선희ㄻㄴㅇㄻㅇㄴㄹ</p><p>GOod</p><p><br/></p><table style="border-collapse:collapse;width: 100%;"><tbody> <tr> <td style="width: 33.3333%;">번호</td> <td style="width: 33.3333%;">이름</td> <td style="width: 33.3333%;">색깔</td></tr> <tr> <td style="width: 33.3333%;">1</td> <td style="width: 33.3333%;">이중재</td> <td style="width: 33.3333%;">빨강</td></tr> <tr> <td style="width: 33.3333%;">2</td> <td style="width: 33.3333%;">박선희</td> <td style="width: 33.3333%;">파랑</td></tr></tbody></table><p>맞아요</p><p><br/></p>'
  return (
    <div>
      <div dangerouslySetInnerHTML={{__html:html}}>

      </div>
    </div>
  )
}
