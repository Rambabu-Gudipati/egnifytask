import './index.css'

const OptionCard = props => {
  const {optionCardDetails, isActive, setActiveOption} = props
  const {option, alphabet, id} = optionCardDetails

  const onChange = () => {
    setActiveOption(id)
  }

  const optionClassName = isActive ? 'blue-color' : 'normal-color'
  const alphabetClassName = isActive ? 'alpha-blue-color' : 'alpha-normal-color'
  return (
    <li className="option-container">
      <button
        type="submit"
        className={`option ${optionClassName}`}
        onClick={onChange}
      >
        <span className={`alphabet ${alphabetClassName}`}>{alphabet}</span>
        {option}
      </button>
    </li>
  )
}
export default OptionCard
