window.onload = () => {
  makeHeader();
  makeFooter();
  componentCustom();
}

function componentCustom() {
  const dataId = document.querySelector('body').getAttribute('data-id');
  switch (dataId) {
    default:
      generalAction(dataId, '');
      break;
  }
}


function generalAction(dataId, type) {
  const validatedAction = document.querySelector('#validatedAction' + type);
  const generatedAction = document.querySelector('#generatedAction' + type);
  const generatedObjectAction = document.querySelector('#generatedObjectAction' + type);

  if (generatedAction) {
    generatedAction.onclick = () => {
      const generatedInput = document.querySelector('#generated' + type);
      generatedInput.value = jsbrasil.fakerBr[dataId]();
    }
  }


  if(generatedObjectAction){
    generatedObjectAction.onclick = () => {
      // const generatedInput = document.querySelector('#generated' + type);
      const data = jsbrasil.fakerBr[dataId]();
      for(key in data){
        if(data[key] instanceof Object && !Array.isArray(data[key])){
          for(kk in data[key]){
            if(document.querySelector('#' + kk)){
              document.querySelector('#' + kk).value = data[key][kk];
            }
            
          }
        }else if (!(data[key] instanceof Object)){
          if(document.querySelector('#' + key)){
            document.querySelector('#' + key).value = data[key];
          }
        }
        
      }
    }
  }



  if (validatedAction) {
    validatedAction.onclick = () => {
      const validatedInput = document.querySelector('#validated' + type);
      const masked = jsbrasil.maskBr[dataId] ? jsbrasil.maskBr[dataId](validatedInput.value) : validatedInput.value;
      const validated = jsbrasil.validateBr[dataId](validatedInput.value);

      document.querySelector('#validatedResult' + type).classList.remove('hidden');

      if (validated) {
        document.querySelector('#valicon' + type).innerHTML = 'thumb_up';
        document.querySelector('#valtext' + type).innerHTML = 'ParabÃ©ns, ' + masked + ' tem a formataÃ§Ã£o vÃ¡lida!';
      } else {
        document.querySelector('#valicon' + type).innerHTML = 'thumb_down';
        document.querySelector('#valtext' + type).innerHTML = 'Esta informaÃ§Ã£o NÃƒO estÃ¡ correta!';
      }
    }
  }

}
function makeHeader() {
  const header = `

 `;

  document.querySelector('header').innerHTML = header;


}

function makeFooter() {
  const footer = `
 
 `;
  document.querySelector('footer').innerHTML = document.querySelector('footer').innerHTML + footer;
}

