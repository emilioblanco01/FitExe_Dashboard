export interface DataMovement{
    id: number;
    TrainingTypeId: number;
    TrainerId: number;
    URL: string;
    MovementName: string;
}

export interface DataUsers{
    AthleteId: number;
    TrainingType: number
    UserId: number;
    dateBirth: string;
    email: string;
    lastName: string;
    name: string;
    password: string;
    phoneNumber: string;
}

interface StandardData {
    name: string;
    email: string;
}
    

