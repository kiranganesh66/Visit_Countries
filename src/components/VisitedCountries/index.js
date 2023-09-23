import './index.css'

const VisitedCountries = props => {
  const {eachDetails, onclickbtn} = props
  const {id, name, imageUrl} = eachDetails

  const onClickVisit = () => {
    onclickbtn(id)
  }

  return (
    <ul>
      <li className="img-container">
        <img className="country-image" src={imageUrl} alt="thumbnail" />
        <div className="name-btn-container">
          <p className="para">{name}</p>
          <button type="button" className="btn-remove" onClick={onClickVisit}>
            Remove
          </button>
        </div>
      </li>
    </ul>
  )
}
export default VisitedCountries
