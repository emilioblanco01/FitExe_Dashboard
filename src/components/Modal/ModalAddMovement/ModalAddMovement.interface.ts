
export interface IModalAddMovementProps extends DataNewMovement {
    open: boolean;
    handleClose: () => void;
    onChange: ( DataNewMovement ) => void;
    onSave: () => void;
};

export interface IDataNewMovement { name: string; type: string; url: string; };

interface DataNewMovement { data: IDataNewMovement; };
