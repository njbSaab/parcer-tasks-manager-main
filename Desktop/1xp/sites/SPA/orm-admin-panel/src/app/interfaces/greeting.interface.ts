export interface GreetingBot {
    id: number;
    title: string;
    greeting_text: string;
    image_url?: string | null;
    created_at: string;
    updated_at: string;
    isEditing?: boolean; // Добавляем для режима редактирования
  }