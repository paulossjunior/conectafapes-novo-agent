export interface HttpClientInterface {
  get<T>(url: string, params?: Record<string, any>): Promise<T>;
  post<T, D = any>(url: string, data?: D): Promise<T>;
  put<T, D = any>(url: string, data?: D): Promise<T>;
  patch<T, D = any>(url: string, data?: D): Promise<T>;
  delete<T>(url: string): Promise<T>;
}
