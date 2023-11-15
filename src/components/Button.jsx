const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  hoverChange,
  fullWidth,
}) => {
  return (
    <button
      className={`${backgroundColor} ${borderColor} ${hoverChange} ${textColor} flex justify-center rounded-full 
    items-center gap-2 px-7 py-4 border font-montserrat text-lg ${
      fullWidth ? "w-full" : ""
    }
     leading-none bg-coral-red hover:bg-red-400 ${
       textColor ? textColor : "text-white"
     }
      border-coral-red `}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="Icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
