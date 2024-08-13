import { Component } from 'react'
import './panel.css'

class Panel extends Component{
    constructor(){
        super()
        this.state = {
            title: 'Título do painel'
        }
    }

    render(){        
        return(
            <section className="panel" onClick={
                () => {              
                    this.setState(
                        {title: 'Título novo'}
                    )
                }
            }>
                <h2>{this.state.title}</h2>
            </section>
        )
    }
}

/* 
Deve ser usado um arrow funcion sempre, pois o this pegaria a function como contexto e o tornaria undefined. Mas ainda pode ser executado caso o this seja passado para uma variavel e então passado como variavel.setState

O state vai servir para ser alterado, algo que uma prop não podera fazer nesse caso especifico que é mudar o titulo do painel por outro ao clicar

Quando o componente for renderizado, o h2 vai ser buscado pelo this.state.title que esta na função constructor (Titulo do painel). O codigo a cima mostra como sera mostrado o estado inicial do titulo

o super() é essencial para trazer os metodos e propriedades do Component, sendo importante apenas para componentes de classe
*/

export default Panel