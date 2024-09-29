import type { GeneratedAlways } from "kysely";

interface Database {
  User: {
    id: GeneratedAlways<string>;
    name: string | null;
    email: string;
    emailVerified: Date | null;
    image: string | null;
  };
  Account: {
    id: GeneratedAlways<string>;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
  };
  Session: {
    id: GeneratedAlways<string>;
    userId: string;
    sessionToken: string;
    expires: Date;
  };
  VerificationToken: {
    identifier: string;
    token: string;
    expires: Date;
  };
}

console.warn('Using mock database implementation. Do not use in production!');

const mockQueryBuilder = {
  selectFrom: (table: keyof Database) => ({
    selectAll: () => ({
      execute: async () => [] as any[],
    }),
  }),
  insertInto: (table: keyof Database) => ({
    values: (values: any) => ({
      returningAll: () => ({
        executeTakeFirstOrThrow: async () => values,
      }),
    }),
  }),
  updateTable: (table: keyof Database) => ({
    set: (values: any) => ({
      where: () => ({
        executeTakeFirst: async () => values,
      }),
    }),
  }),
  deleteFrom: (table: keyof Database) => ({
    where: () => ({
      execute: async () => {},
    }),
  }),
};

const mockExecutor = {
  executeQuery: async () => ({ rows: [] }),
};

export const db = {
  ...mockQueryBuilder,
  getExecutor: () => mockExecutor,
  transaction: async (callback: (trx: any) => Promise<any>) => {
    return callback(mockQueryBuilder);
  },
} as any;
