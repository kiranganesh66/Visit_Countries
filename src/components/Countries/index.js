import './index.css'

const Countries = props => {
  const {countryDetails, clickedButton} = props
  const {id, name, isVisited} = countryDetails

  const btnactcls = isVisited ? 'btn-act-cls' : null

  const onClickElement = () => {
    clickedButton(id)
  }
  return (
    <li className="list">
      <div className="li-container">
        <p className="countryName">{name}</p>
        {isVisited ? (
          <p className="vist-para">Visited</p>
        ) : (
          <button
            type="button"
            className={`btn-cls ${btnactcls}`}
            onClick={onClickElement}
          >
            Visit
          </button>
        )}
      </div>
      <hr className="br-cls" />
    </li>
  )
}
export default Countries
