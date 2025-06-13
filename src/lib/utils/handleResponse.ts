type ApiSuccess<T> = {
    success: true;
    response: T;
    access_token?: string
};

type ApiError = {
    success: false;
    error: "expired-payment" | "too-many-requests" | "internal-error" | "incorrect-data" | "already-exists";
};

type ApiResponse<T> = ApiSuccess<T> | ApiError;

export function handleApiResponse<T>(status: number, result?: T): ApiResponse<T> {
    const successStatuses: Record<number, () => ApiSuccess<T>> = {
        201: () => ({ success: true, response: result as T }),
        200: () => ({success: true, response: result as T})
    };

    const errorStatuses: Record<number, ApiError["error"]> = {
        402: "expired-payment",
        429: "too-many-requests",
        401: "incorrect-data",
        409: "already-exists"
    };

    if (status in successStatuses) {
        return successStatuses[status]();
    }

    const error = errorStatuses[status] || "internal-error";
    return { success: false, error };
}
