import { Link } from 'react-router-dom';
import DropdownList from './DropdownList';
import { aboutMenu } from '../../constant.ts';

const AboutDropdown = () => {
    return (
        <DropdownList>
            {aboutMenu.map((menu) => {
                return (
                    <li key={menu.text} className='mb-3'>
                        <Link to={menu.linkTo} className='text-base font-normal text-darkFont'>
                            {menu.text}
                        </Link>
                    </li>
                );
            })}
        </DropdownList>
    );
};

export default AboutDropdown;
