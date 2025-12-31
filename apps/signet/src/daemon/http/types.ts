import type { FastifyRequest, FastifyReply } from 'fastify';

/**
 * Type for Fastify preHandler middleware functions.
 * All auth, CSRF, and rate limit middleware conform to this signature.
 */
export type PreHandler = (
    request: FastifyRequest,
    reply: FastifyReply
) => Promise<void>;

/**
 * PreHandler configuration for routes that only need authentication.
 */
export type PreHandlerAuth = PreHandler[];

/**
 * PreHandler configuration for routes that need auth and CSRF protection.
 */
export interface PreHandlerAuthCsrf {
    auth: PreHandler[];
    csrf: PreHandler[];
}

/**
 * PreHandler configuration for routes that need auth, CSRF, and rate limiting.
 */
export interface PreHandlerFull {
    auth: PreHandler[];
    csrf: PreHandler[];
    rateLimit: PreHandler[];
}
