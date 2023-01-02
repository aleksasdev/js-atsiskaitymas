export default class CarCard{
   constructor(props){
      this.props = props;
      this.outputContainer = document.querySelector('#output');
   }

   render(){
      this.container = document.createElement('div');
      this.container.classList.add('car-card');

      this.info = document.createElement('h1');
      this.info.classList.add('model-info');
      this.info.textContent = "Available models";

      this.brand = document.createElement('p');
      this.brand.classList.add('brand');
      this.brand.textContent = this.props.brand;

      // Loop through models array
      this.modelsContainer = document.createElement('div');
      this.modelsContainer.classList.add('models-container');

      this.props.modelsArray.forEach(model=>{
         this.model = document.createElement('p');
         this.model.textContent = model;
         this.modelsContainer.append(this.model);
      })

      this.container.append(this.brand, this.info, this.modelsContainer);
      this.outputContainer.append(this.container);
   }
}