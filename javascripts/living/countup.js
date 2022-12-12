const counters = document.querySelectorAll('.count_value');
const speed = 50;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('data-val');
      const data = +counter.innerText;
     
      const time = value / speed;
        if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 60);
        }else{
          counter.innerText = value;
        }
   }
   
   animate();
});
