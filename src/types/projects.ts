
export interface Project {
    title: string;
    description: string;
    thumbnail_img?: string;
    thumbnail_icon?: Tags;
    link?: string;
    tags: Tags[];
  }
  
  export interface Tags {
    label: string;
    icon: any;
  }