import Badge from 'react-bootstrap/Badge';

const RoleTag =({role}) => {
    const roleName = role == 'Student' ? "Студент" : role == 'Teacher'? "Преподаватель" : "Деканат";
    const backgroundColor = role == 'Student' ? "primary" : role == 'Teacher'? "success" : "danger"; 
    return (
        <Badge bg={backgroundColor} 
        style={{position:'absolute', top: '-5px', right: '-5px', 
            height: '2rem'}}>
            <h6>{roleName}</h6>
        </Badge>
    );
};


export default RoleTag