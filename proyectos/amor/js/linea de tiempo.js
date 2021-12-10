// https://thewebdev.info/2021/09/12/how-to-draw-a-line-between-two-divs-with-javascript/#:~:text=To%20draw%20a%20line%20between%20two%20divs%20with,divs.%20For%20instance%2C%20if%20we%20have%202%20divs%3A

const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.pageXOffset,
      top: rect.top + window.pageYOffset,
      width: rect.width || el.offsetWidth,
      height: rect.height || el.offsetHeight
    };
  }

  const connect = (div1, div2, color, thickness) => {
    const off1 = getOffset(div1);
    const off2 = getOffset(div2);
  
    const x1 = off1.left + (off1.width / 2);
    const y1 = off1.top + off1.height;
  
    const x2 = off2.left + (off2.width / 2);
    const y2 = off2.top;
  
    const length = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
  
    const cx = ((x1 + x2) / 2) - (length / 2);
    const cy = ((y1 + y2) / 2) - (thickness / 2);
  
    const angle = Math.atan2((y1 - y2), (x1 - x2)) * (180 / Math.PI);
  
    const htmlLine = "<div style='padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);' />";
  
    document.body.innerHTML += htmlLine;
  }
  
  const d1 = document.getElementById('f1')
  const d2 = document.getElementById('f2')


  /* Para que en celulares no se vean las lineas */
  if (window.matchMedia("(min-width: 768px)").matches) {
      connect(f1, f2, 'green', 5);
      connect(f2, f3, 'green', 5);
      connect(f3, f4, 'green', 5);
      connect(f4, f5, 'green', 5);
      connect(f5, f6, 'green', 5);
  } 
