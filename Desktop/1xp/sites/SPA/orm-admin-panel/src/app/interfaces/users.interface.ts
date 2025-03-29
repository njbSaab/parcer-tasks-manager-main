// src/app/interfaces/user.interface.ts
export interface Users {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    email?: string;
    language_code?: string;
    can_join_groups: boolean;
    can_read_all_group_messages: boolean;
    supports_inline_queries: boolean;
    state: string;
    last_active?: string; // или Date, если ты потом будешь парсить
    isNewsActive: boolean;
    created_at: string;
    updated_at: string;
  }