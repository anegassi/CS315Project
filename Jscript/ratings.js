const Rating={

    render:(input)=>{
        if(!input.value){
            return '<div></div>'
        }
        return `
        <div class="rating">
          <span>
            <i class=" ${input.value >=1? "fa fa-star": input.value >=0.5? "fa fa-star-half-o": "fa fa-star-o"} ">
            </i>
          </span>
          <span>
            <i class=" ${input.value >=2? 'fa fa-star': input.value >=1.5? 'fa fa-star-half-o': 'fa fa-star-o'} ">
            </i>
          </span>
          <span>
            <i class=" ${input.value >=3? 'fa fa-star': input.value >=2.5? 'fa fa-star-half-o': 'fa fa-star-o'} ">
            </i>
          </span>
          <span>
            <i class=" ${input.value >=4? 'fa fa-star': input.value >=3.5? 'fa fa-star-half-o': 'fa fa-star-o'} ">
            </i>
          </span>
          <span>
            <i class=" ${input.value >=5? 'fa fa-star': input.value >=4.5? 'fa fa-star-half-o': 'fa fa-star-o'} ">
            </i>
          </span>
          <span>
           ${input.text || ''}
          </span>

        </div>

        `
    }
}

export default Rating;