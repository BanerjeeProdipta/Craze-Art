interface props {
  text: string
  className?: string
  onClick?: () => void
}

function PrimaryButton({ text, className, onClick }: props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg bg-gradient-to-bl from-primaryLight to-primaryDark px-4 py-2 text-white transition delay-150 duration-300 hover:bg-gradient-to-tr ${className}`}
    >
      {text}
    </button>
  )
}

PrimaryButton.defaultProps = {
  className: '',
  onClick: () => {},
}

export default PrimaryButton
