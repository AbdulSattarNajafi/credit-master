const DropdownList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ul className='hidden absolute top-full left-0 w-[250px] rounded-2xl bg-white group-hover:flex flex-col shadow-dropdown-shadow p-[30px] pb-[18px] z-10'>
            {children}
        </ul>
    );
};

export default DropdownList;
