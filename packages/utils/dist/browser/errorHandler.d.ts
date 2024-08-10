/**
 * 高级错误处理模块，提供对不同错误类型的分类和处理。
 * @module ErrorHandler
 */
export declare enum ErrorType {
    NetworkError = "NetworkError",
    ValidationError = "ValidationError",
    RuntimeError = "RuntimeError"
}
export declare class ErrorHandler {
    handleError(error: Error, type: ErrorType): void;
    private handleNetworkError;
    private handleValidationError;
    private handleRuntimeError;
    private logError;
}
declare const errorHandler: ErrorHandler;
export default errorHandler;
