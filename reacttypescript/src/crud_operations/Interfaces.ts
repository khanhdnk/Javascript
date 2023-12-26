interface ApiError{
    status: boolean,
    message: string
}

export interface UserInformation{
    id: number,
    name: string
}

export interface ResponseForGetListEmployees{
    status: boolean,
    data: (UserInformation[]|UserInformation),
    notice: string
}


export function isApiError(error: any): error is ApiError {
    return 'status' in error && 'message' in error;
}

