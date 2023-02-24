import { Link } from 'react-router-dom';

import DropdownList from './DropdownList';
import { loanMenu } from './../../constant.ts';

const LoansDropdown = () => {
    return (
        <DropdownList>
            {loanMenu.map((item) => (
                <li key={item.text} className='mb-3'>
                    <Link to={item.linkTo} className='text-base font-normal text-darkFont'>
                        {item.text}
                    </Link>
                </li>
            ))}
        </DropdownList>
    );
};

export default LoansDropdown;
