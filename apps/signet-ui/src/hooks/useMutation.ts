import { useState, useCallback, useRef } from 'react';
import { buildErrorMessage } from '../lib/formatters.js';

export interface MutationState {
    loading: boolean;
    error: string | null;
}

export interface MutationOptions {
    /** Error message prefix when operation fails */
    errorPrefix?: string;
    /** Called after successful mutation (e.g., to refresh data) */
    onSuccess?: () => Promise<void> | void;
    /** Called when mutation fails */
    onError?: (error: string) => void;
}

/**
 * Creates a mutation function with loading state and error handling.
 *
 * @example
 * const { mutate: deleteKey, loading: deleting, error } = useMutation(
 *   async (keyName: string) => {
 *     const result = await apiDelete(`/keys/${keyName}`);
 *     if (!result.ok) throw new Error(result.error);
 *     return result;
 *   },
 *   { errorPrefix: 'Failed to delete key', onSuccess: refresh }
 * );
 */
export function useMutation<TInput, TOutput>(
    mutationFn: (input: TInput) => Promise<TOutput>,
    options: MutationOptions = {}
): {
    mutate: (input: TInput) => Promise<TOutput | null>;
    loading: boolean;
    error: string | null;
    clearError: () => void;
} {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const optionsRef = useRef(options);
    optionsRef.current = options;

    const mutate = useCallback(async (input: TInput): Promise<TOutput | null> => {
        setLoading(true);
        setError(null);

        try {
            const result = await mutationFn(input);

            if (optionsRef.current.onSuccess) {
                await optionsRef.current.onSuccess();
            }

            return result;
        } catch (err) {
            const message = buildErrorMessage(err, optionsRef.current.errorPrefix ?? 'Operation failed');
            setError(message);

            if (optionsRef.current.onError) {
                optionsRef.current.onError(message);
            }

            return null;
        } finally {
            setLoading(false);
        }
    }, [mutationFn]);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return { mutate, loading, error, clearError };
}

