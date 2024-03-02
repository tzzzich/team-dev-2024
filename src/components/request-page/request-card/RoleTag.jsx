
import Badge from 'react-bootstrap/Badge';

const RoleTag =({role}) => {
    const roleName = role == 'Student' ? "Студент" : "Преподаватель";
    const backgroundColor = role == 'Student' ? "primary" : "success"; 
    return (
        <Badge bg={backgroundColor} 
        style={{position:'absolute', top: '-5px', right: '-5px', 
        height: '2rem'}}>
            <h6>{roleName}</h6>
        </Badge>
    );
};


export default RoleTag