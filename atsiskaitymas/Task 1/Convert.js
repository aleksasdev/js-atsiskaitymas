export default class Convert{
   constructor(kilograms){
      this.kilograms = parseFloat(kilograms);
      this.render();
   }

   render(){
      this.lbs = this.kilograms * 2.2046;
      this.g = this.kilograms / 0.0010000;
      this.oz = this.kilograms * 35.274;

      document.querySelector("#output .pounds").textContent = this.lbs.toFixed(2);
      document.querySelector("#output .grams").textContent = this.g.toFixed(2).replace(/\.0+$/, '');
      document.querySelector("#output .oz").textContent = this.oz.toFixed(2);
   }
}
