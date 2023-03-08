import style from './CollectName.module.css'

const CollectName = (props) => {
  return (
    <div className={`${props.className} ${style.collectName}`}>
      <h3>{props.title}</h3>
      <div className={style.user}>
      <img src={props.icon} alt="user-icon" />
      <p>{props.name}</p>
      </div>
    </div>
  )
}

export default CollectName;