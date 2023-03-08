import style from './Button.module.css'

const Button = (props) => {
  return(
  <button className={`${props.className} ${style.button}`} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button