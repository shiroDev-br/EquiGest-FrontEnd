type ApiSuccess<T> = {
    success: true;
    response: T;
};

type ApiError = {
    success: false;
    error: "expired-payment" | "too-many-requests" | "internal-error";
};

type ApiResponse<T> = ApiSuccess<T> | ApiError;

export function handleApiResponse<T>(status: number, result?: T): ApiResponse<T> {
    const successStatuses: Record<number, () => ApiSuccess<T>> = {
        201: () => ({ success: true, response: result as T }),
    };

    const errorStatuses: Record<number, ApiError["error"]> = {
        402: "expired-payment",
        429: "too-many-requests",
    };

    if (status in successStatuses) {
        return successStatuses[status]();
    }

    const error = errorStatuses[status] || "internal-error";
    return { success: false, error };
}
