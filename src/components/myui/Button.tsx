import { ArrowRight } from 'lucide-react'

const Button = ({
  text = 'Learn More',
  icon = true,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer'

  const variants = {
    primary:
      'bg-[#257341] text-white hover:bg-[#1d5b33] shadow-md hover:scale-105',

    secondary:
      'border border-[#257341] text-[#257341] hover:bg-[#257341] hover:text-white',

    dark: 'bg-black text-white hover:bg-[#222]',

    orange : 'bg-[#ff5938] text-white hover:bg-[#1d5b33] shadow-md hover:scale-105'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <span>{text}</span>

      {icon && (
        <ArrowRight
          size={18}
          className='transition-transform duration-300 group-hover:translate-x-1'
        />
      )}
    </button>
  )
}

export default Button