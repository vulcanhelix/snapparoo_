// Mock implementation for database operations

export const db = {
  async query(_query: string, _values: any[] = []) {
    console.log('Mock query executed:', _query);
    return [];
  },
};

// Mock enums
export enum SubscriptionPlan {
  FREE = 'FREE',
  PRO = 'PRO',
  ENTERPRISE = 'ENTERPRISE',
}

// This setup will bypass all database operations
