export interface MenuItem {
      id: number;
      title: string;
      linkUrl: string | null;
      children: {
        id: number;
        title: string;
        linkUrl: string | null;
        children: null;
      }[] | null;
  }
  
 export type MenuItemProps =  {
    menuItem: MenuItem;
    onOpenTutorialVideoModal: () => void;
 }
  