function updateState(state, props){
    Object.entries(props).forEach(([key1, value1])=>{
        if (typeof value1 === 'object'&&Array.isArray(value1)==false){
            Object.entries(value1).forEach(([key2, value2])=>{
                if (typeof value2 === 'object'){
                    if (key1 in state){
                        if (key2 in state[key1]){
                            props[key1][key2] = {...state[key1][key2],...value2}
                        } 
                        props[key1] = {...state[key1],...props[key1]}                                            
                    }
                }
            })
        }
   }) 
   return {...state,...props}
}

function getAnimation(animation){
    let data = `data-animation="${animation.animation}"`
    if ('delay' in animation){
        data = data.concat(` data-delay="${animation.delay}"`)
    }
    if ('speed' in animation){
        data = data.concat(` data-speed="${animation.speed}"`)
    }
    if ('repeat' in animation){
        data = data.concat(` data-repeat="${animation.repeat}"`)
    }
    return data
}

function getClasses(obj){
    let classes = ''
    if ('color' in obj) classes = classes.concat(` ${obj.color}`)
    if ('size' in obj) classes = classes.concat(` ${obj.size}`)
    if ('align' in obj) classes = classes.concat(` ${obj.align}`)
    if ('display' in obj) classes = classes.concat(` ${obj.display}`)
    if ('style' in obj) classes = classes.concat(` ${obj.color}`)
    if ('rounded' in obj && obj.rounded==true) classes = classes.concat(` is-rounded`)
    if ('fullwidth' in obj && obj.fullwidth==true) classes = classes.concat(` is-fullwidth`)
    return classes
}

function getLinks(array){
    items = ``
    array.forEach(el=>{
        items = items.concat(`<li${el.active?` class="is-active`:""}><a href="${el.href}" >${el.text}</a></li>`)
       })
    return items
}

function getNav(array){
    items = ``
    array.forEach(el=>{
        items = items.concat(`<a class="navbar-item ${el.active?` is-active`:""}"  href="${el.href}" >${el.text}</a>`)
       })
    return items
}




export {updateState, getAnimation, getClasses, getLinks, getNav}