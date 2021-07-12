var trleng=$('.l_table').find('tbody').find('tr').length   
var tdleng=$('.l_table').find('tr:first').find('th').length 


var headArr=[] 
for(var i=0;i<tdleng;i++){
  headArr.push($('.l_table').find('thead').find('th').eq(i).html())
} 

var textArr=[]  
for(let i=0;i<trleng;i++){
  for(let j=0;j<tdleng;j++){
      let text=$('.l_table').find('tbody').find('tr').eq(i).find('td').eq(j).html()
      textArr.push(text)
  }
}

let allrow=trleng+1
let srt=''

for(let i=0;i<allrow;i++){
  srt+=`<dt>${headArr[i]}</dt>`
  for(let j=0;j<trleng;j++){
    srt+=`<dd>${textArr[j*4+i]}</dd>`
  }
}

let newDom=`<dl>${srt}</dl>`

$('.s_table').html(newDom)


