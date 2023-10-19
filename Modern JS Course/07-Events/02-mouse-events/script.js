const logo = document.querySelector('img')

const onClick = () => console.log('click event');


const onDoubleClick = () => {
  console.log('Double click event')
  if (document.body.style.backgroundColor !== 'purple'
  ) {
    document.body.style.backgroundColor = 'purple'
    document.body.style.color = 'white'
  }else{
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }

};


const onRightClick = () => console.log('right click event');
const onMouseUp = () => console.log('mouse Up event');
const onMouseDown = () => console.log('mouse down event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');

const onDragStart = () => console.log('drag start event');
const onDrag = () => console.log('drag event');
const onDragEnd = () => console.log('drag end event');


// Event Listener
logo.addEventListener('click', onClick)
logo.addEventListener('dblclick', onDoubleClick)

logo.addEventListener('contextmenu', onRightClick)

logo.addEventListener('mouseup', onMouseUp)
logo.addEventListener('mousedown', onMouseDown)

logo.addEventListener('wheel', onMouseWheel)
logo.addEventListener('mouseover', onMouseOver)
logo.addEventListener('mouseout', onMouseOut)

logo.addEventListener('dragstart', onDragStart)
logo.addEventListener('drag', onDrag)
logo.addEventListener('dragend', onDragEnd)
