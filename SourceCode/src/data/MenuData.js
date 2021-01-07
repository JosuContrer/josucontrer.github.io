import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faAt, faArchive, faUserTie, faDumbbell, faIgloo, faPepperHot} from '@fortawesome/free-solid-svg-icons';

export const menuData = [
    {title: 'Home', link: '/home', icon: <FontAwesomeIcon icon={faIgloo}/>},
    {title: 'About', link: '/about', icon: <FontAwesomeIcon icon={faAt}/>},
    {title: 'Projects', link: '/projects', icon: <FontAwesomeIcon icon={faArchive}/>},
    {title: 'Experience', link: '/experience', icon: <FontAwesomeIcon icon={faUserTie}/>},
    {title: 'Random', link: '/random', icon: <FontAwesomeIcon icon={faPepperHot}/>},
    {title: 'Hobbies', link: '/hobbies', icon: <FontAwesomeIcon icon={faDumbbell}/>},
]