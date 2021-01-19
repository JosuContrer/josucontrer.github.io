import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faAt, faArchive, faUserTie, faDumbbell, faIgloo, faPepperHot} from '@fortawesome/free-solid-svg-icons';

export const menuData = [
    {title: 'Home', link: '/home', offset: 0 ,icon: <FontAwesomeIcon icon={faIgloo}/>},
    {title: 'About', link: '/about', offset: 0, icon: <FontAwesomeIcon icon={faAt}/>},
    {title: 'Projects', link: '/projects', offset: 0, icon: <FontAwesomeIcon icon={faArchive}/>},
    {title: 'Experience', link: '/experience', offset: 0, icon: <FontAwesomeIcon icon={faUserTie}/>},
    {title: 'Random', link: '/random', offset: 0, icon: <FontAwesomeIcon icon={faPepperHot}/>},
    {title: 'Hobbies', link: '/hobbies', offset: 0, icon: <FontAwesomeIcon icon={faDumbbell}/>},
]