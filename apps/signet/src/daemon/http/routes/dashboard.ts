import type { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import type { DashboardService } from '../../services/index.js';
import type { PreHandlerAuth } from '../types.js';

export interface DashboardRouteConfig {
    dashboardService: DashboardService;
}

export function registerDashboardRoutes(
    fastify: FastifyInstance,
    config: DashboardRouteConfig,
    preHandler: PreHandlerAuth
): void {
    fastify.get('/dashboard', { preHandler }, async (_request: FastifyRequest, reply: FastifyReply) => {
        const data = await config.dashboardService.getDashboardData();
        return reply.send(data);
    });
}
