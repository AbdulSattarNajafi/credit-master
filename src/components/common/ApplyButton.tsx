interface ApplyButtonType {
    children: React.ReactNode;
    onClick: () => void;
    activeClass?: string;
}

const ApplyButton: React.FC<ApplyButtonType> = ({ onClick, activeClass, children }) => {
    return (
        <button
            className={`flex flex-col items-center justify-center w-[98px] h-[98px] rounded-[50%] text-background font-semibold ${
                activeClass ? 'text-white' : 'bg-stroke'
            } ${activeClass} lg:w-[120px] lg:h-[120px]`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ApplyButton;
