export interface KeysMenu {
    id: number;
    name: string;
    description: string | null;
    order: number;
    parentId: number | null;
    levelMenu: number | null;
    parent_menu: KeysMenu | null;
    isActive: boolean;
    linkedPostId: number | null;
    linked_post: any | null;
    created_at: string;
    updated_at: string;
    isEditing?: boolean; // Добавляем для режима редактирования
  }