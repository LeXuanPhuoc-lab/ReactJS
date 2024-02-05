import colorNames from 'colornames';

const Input = ({ color, setColor, setHexValue, isDarkText ,setIsDarkText }) => {
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} className='flex flex-column'>
                <div>
                    <label htmlFor="input color"></label>
                    <input
                        className="m-2"
                        id="input color"
                        autoFocus
                        type="text"
                        value={color}
                        onChange={(e) => {
                            // translate value to hex value state 
                            setHexValue(colorNames(e.target.value));
                            setColor(e.target.value); 
                        }}
                        placeholder="Add color name"
                    />
                </div>
                <div>
                    <button
                        type="button"
                        className='btn btn-success m-2'
                        onClick={() => setIsDarkText(!isDarkText)}
                    >
                        Toggle change text
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Input;
