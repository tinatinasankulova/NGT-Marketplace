import style from './TextTitle.module.css'

const TextTitle = (props) => {
  return (
    <div className={`${style.textTitle} ${props.className}`} >
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  )
}

export default TextTitle