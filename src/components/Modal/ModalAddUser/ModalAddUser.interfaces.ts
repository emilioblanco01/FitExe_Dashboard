
export interface IModalAddMovementProps extends DataNewMovement {
    open: boolean;
    handleClose: () => void;
    onChange: ( DataNewMovement ) => void;
    onSave: () => void;
};

export interface IDataNewMovement { 
    name: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    birthdate: string;
    typeTraining: string;
 };

interface DataNewMovement { data: IDataNewMovement; };
