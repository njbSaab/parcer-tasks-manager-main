export interface Message {
    id: number;
    message_title: string | null;
    message_content: string | null;
    message_image_url: string | null;
    created_at: string;
    updated_at: string;
    parent_menu?: any; // Если parent_menu не используется, можно оставить как any или уточнить тип
    buttons: MessageButtonsList[];
    isEditing?: boolean; // Добавляем для управления режимом редактирования
  }
  
  export interface MessageButtonsList {
    id: number;
    messageId: number;
    button: MessageButtons;
    isEditing?: boolean; // Добавляем для управления редактированием кнопки
  }
  
  export interface MessageButtons {
    id: number;
    name: string;
    content: string | null;
    type: 'full' | 'inline';
    url: string | null;
    order: number;
    created_at: string;
    updated_at: string;
  }export interface Message {
    id: number;
    message_title: string | null;
    message_content: string | null;
    message_image_url: string | null;
    created_at: string;
    updated_at: string;
    parent_menu?: any; // Если parent_menu не используется, можно оставить как any или уточнить тип
    buttons: MessageButtonsList[];
    isEditing?: boolean; // Добавляем для управления режимом редактирования
  }
  
  export interface MessageButtonsList {
    id: number;
    messageId: number;
    button: MessageButtons;
  }
  
  export interface MessageButtons {
    id: number;
    name: string;
    content: string | null;
    type: 'full' | 'inline';
    url: string | null;
    order: number;
    created_at: string;
    updated_at: string;
  }